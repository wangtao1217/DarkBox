import React, {
  useContext,
  useState,
  useCallback,
  useRef,
  useMemo,
} from "react";

import { Container, Center, Left, Right } from "./styles";
import { format_time, format_author } from "../../../utils/formatter";
import Range from "../../../components/range/index";
import { MusicContext, AudioContext } from "../../../content/MusicContext";
import usePlay from "../../../hooks/usePlay";
import { Text, H1, H3 } from "../../../styles";
import { useHover } from "react-use";

function Player(props) {
  const {lyric_mode} = props
  const [hovered, setHover] = useState(false);

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

  return (
    <Container occupy={state.musicId !== 0}>
      {state.musicId !== 0 ? (
        <>
          <span className="range">
            <Range
              value={Math.round(time)}
              min={0}
              max={duration}
              setValue={(values: number) => controls.seek(values)}
            ></Range>
          </span>

          {lyric_mode?`${min}:${sec}/${dt_min}:${dt_sec}`:<Left>
            <div
              className="infor-img"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => dispatch({ type: "toggle_lyric" })}
            >
              <img src={picUrl} alt="专辑封面" />
              {hovered ? <span>X</span> : null}
            </div>
            <section className="text">
              <Text size="h2">{name}</Text>
              <H3 size="h4">{format_author(ar)}</H3>
            </section>
          </Left>}

          <Center>
            <i onClick={() => randomPlay()}></i>
            <i onClick={() => playPrev()}></i>
            <i onClick={() => togPlay()}></i>
            <i onClick={() => playNext()}></i>
            <i onClick={() => {}}></i>
          </Center>

          <Right>
            <span>
              {lyric_mode?null:`${min}:${sec}/${dt_min}:${dt_sec}`}
            </span>
            <i onClick={() => dispatch({ type: "toggle" })}></i>
          </Right>
        </>
      ) : null}
    </Container>
  );
}

export default Player;
