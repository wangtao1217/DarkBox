import React, { useContext, useCallback, useMemo } from "react";

import { Container } from "./styles";
import { format_time, format_author } from "../../../utils/formatter";
import Range from "../../../components/range/index";
import { MusicContext, AudioContext } from "../../../content/MusicContext";
import usePlay from "../../../hooks/usePlay";
import { Text, H1, H3 } from "../../../styles";

function Player() {
  const [music, onPlay, playPrev, playNext, randomPlay] = usePlay();
  const { state, dispatch } = useContext(MusicContext);
  const { state: audioState, controls } = useContext(AudioContext);
  const { time, paused } = audioState;
  const { sec, min } = format_time(time);

  const { name, ar, duration, picUrl, id } = state.music;
  const { sec: dt_sec, min: dt_min } = format_time(duration);

  const togPlay = useCallback(
    () => (paused ? controls.play() : controls.pause()),
    [controls, paused]
  );

  // const likeMusic = useCallback((musicId) => console.log(musicId), []);
  return (
    <Container occupy={state.musicId !== 0}>
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
        <i onClick={() => togPlay()}></i>
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
        <i onClick={() => dispatch({ type: "toggle" })}></i>
      </section>
    </Container>
  );
}

export default Player;
