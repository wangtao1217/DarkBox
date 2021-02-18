import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import { Container } from "./styles";
import { format_time, format_author } from "../../../utils/formatter";
import { getAlbum } from "../../../api/album";
import Range from "../../../components/range/index";
import { MusicContext, AudioContext } from "../../../content/MusicContext";
import { playList as playListLocalStorage } from "../../../storage/music_store";
import usePlay from "../../../hooks/usePlay";
import Lyric from "./lyric";

function Player() {
  const [music, onPlay] = usePlay();
  const { state, dispatch } = useContext(MusicContext);
  const { state: audioState, controls } = useContext(AudioContext);

  const { time, paused } = audioState;
  const { sec, min } = format_time(time);

  const { name, ar, duration, picUrl, id } = state.music;
  const { sec: dt_sec, min: dt_min } = format_time(duration);

  // let res = getDiscover(5);
  // console.log(res);
  let albumId = 5326454936;

  useEffect(() => {
    getAlbum(albumId).then((response) => {
      // const { playList } = response.data;
      const ids = [];
      console.log(response);

      // if (!response) return null;
      // setInfo(response);
      // playList.trackIds.map((item) => {
      //   ids.push(item.id);
      // });
      // songs(ids).then((res) => setSongs(res));
    });
  }, [albumId]);

  const togPlay = useCallback(
    () => (paused ? controls.play() : controls.pause()),
    [controls, paused]
  );

  const playList = useMemo(() => playListLocalStorage.getItem(), [
    state.musicId,
  ]);
  const prev_music = useCallback(() => console.log("prev"), []);
  const next_music = useCallback(() => console.log("next"), []);

  return (
    <Container occupy={state.musicId !== 0}>
      {/* <Lyric /> */}
      <section className="infor">
        <div className="infor-img">
          <img src={picUrl} alt="专辑封面" />
        </div>
        <section className="text">
          <span className="name">{name}</span>
          <span>{format_author(ar)}</span>
        </section>
      </section>

      <section className="operation">
        <i className="fas fa-play" onClick={() => togPlay()}></i>
        <i
          className="fas fa-align-right"
          // onClick={() => onPlay(1489342354)}
        ></i>
        <i
          className="fas fa-align-right"
          // onClick={() => setLyric(!lyric)}
        ></i>
         <i
          className="fas fa-align-right"
          // onClick={() => setLyric(!lyric)}
        ></i>
      </section>
      <section className="time-bar">
        <span>
          {`${min}:${sec}`}/{`${dt_min}:${dt_sec}`}
        </span>
        <Range
          value={Math.round(time)}
          min={0}
          max={duration}
          setValue={(values: number) => controls.seek(values)}
        ></Range>
      </section>
    </Container>
  );
}

export default Player;
