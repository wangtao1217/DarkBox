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
import {
  playList as playListLocalStorage,
  playHistory as playHistoryLocalStorage,
} from "../../../storage/music_store";
import usePlay from "../../../hooks/usePlay";
import Lyric from "./lyric";
import { Text, H1, H3 } from "../../../styles";

function Player() {
  const [music, onPlay, playPrev, playNext, randomPlay] = usePlay();
  const { state, dispatch } = useContext(MusicContext);
  const { state: audioState, controls } = useContext(AudioContext);
  const [down, setDown] = useState(false)
  const { time, paused } = audioState;
  const { sec, min } = format_time(time);

  const { name, ar, duration, picUrl, id } = state.music;
  const { sec: dt_sec, min: dt_min } = format_time(duration);

  let albumId = 5326454936;

  const playList = useMemo(() => {
    return [...playListLocalStorage.getItem()];
  }, [id]);
  console.log("hahahahahha");
  console.log(playList);

  const playHistory = useMemo(() => playHistoryLocalStorage.getItem(), [
    state.musicId,
  ]);
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

  // const playPrev = useCallback(() => {
  //   let i = playList.findIndex((music) => music.id === state.musicId);
  //   if(i == (playList.length -1)){
  //     i = -1
  //   }
  //   let prevId = playList[(i - 1)].id;
  //   onPlay({ musicId: prevId, playlist: playList });
  // }, [playList, onPlay]);

  // const playNext = useCallback(() => {
  //   let i = playList.findIndex((music) => music.id === state.musicId);
  //   if(i == (playList.length -1)){
  //     i = -1
  //   }
  //   let nextId = playList[(i += 1)].id;

  //   onPlay({ musicId: nextId, playlist: playList });
  // }, [playList, onPlay]);
    
  const likeMusic = useCallback((musicId) => console.log(musicId), []);
  return (
    <Container occupy={state.musicId !== 0} down={down}>
      <section className="infor">
        <div className="infor-img">
          <img src={picUrl} alt="专辑封面" />
        </div>
        <section className="text">
          <H1 size="h2">{name}</H1>
          <H3 size="h4">{format_author(ar)}</H3>
        </section>
      </section>

      <section className="operation">
        <i  onClick={() => togPlay()}></i>
        <i onClick={() => playPrev()}></i>
        <i onClick={() => playNext()}></i>
        <i onClick={() => randomPlay()}></i>
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
      <section className="operation">
        <i className="fas fa-play" onClick={() => togPlay()}></i>
        <i
          onClick={() =>
            dispatch({
              type: "toggle",
            })
          }
        ></i>
      </section>
    </Container>
  );
}

export default Player;
