import React, {
  useContext,
  useState,
  useCallback,
  useRef,
  useMemo,
} from "react";

import {
  faChevronUp,
  faAngleDown,
  faAngleDoubleUp,
  faPlayCircle,
  faPauseCircle,
  faStepForward,
  faStepBackward,
  faList
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Center, Left, Right } from "./styles";
import { format_time, format_author } from "../../../utils/formatter";
import Range from "../../../components/range/index";
import { MusicContext, AudioContext } from "../../../content/MusicContext";
import usePlay from "../../../hooks/usePlay";
import { Text, H1, H3 } from "../../../styles";
import { useHover } from "react-use";

function Player(props) {
  const { lyric_mode } = props;
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

          {lyric_mode ? (
            <H3>{`${min}:${sec}/${dt_min}:${dt_sec}`}</H3>
          ) : (
            <Left>
              <div
                className="infor-img"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => dispatch({ type: "toggle_lyric" })}
              >
                <img src={picUrl} alt="专辑封面" />
                {hovered ? <span>
                  <FontAwesomeIcon icon={faAngleDoubleUp}/>
                </span> : null}
              </div>
              <section className="text">
                <H1 >{name}</H1>
                <H3 size="h4">{format_author(ar)}</H3>
              </section>
            </Left>
          )}

          <Center>
            <FontAwesomeIcon className="icon" onClick={() => playPrev()} icon={faStepBackward } />
            <FontAwesomeIcon className="icon play" onClick={() => togPlay()} icon={paused?faPlayCircle:faPauseCircle} />
            <FontAwesomeIcon className="icon" onClick={() => playNext()} icon={faStepForward} />
          </Center>
         

          <Right>
            <span>
              {lyric_mode ? null : <H3>{`${min}:${sec}/${dt_min}:${dt_sec}`}</H3>}
            </span>
            <FontAwesomeIcon
            className="normal"
            icon={faList}
              onClick={() =>
                dispatch({
                  type: "toggle",
                  load: {
                    showplaylist: true,
                  },
                })
              }
            />
          </Right>
        </>
      ) : null}
    </Container>
  );
}

export default Player;
