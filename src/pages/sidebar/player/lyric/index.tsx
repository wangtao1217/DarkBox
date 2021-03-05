import React, { useContext } from "react";
import Lyric from "./Lyric";
import { LyricContainer } from "./styles";
import { MusicContext } from "../../../../content/MusicContext";
import { H1, H3, Box } from "../../../../styles";
import Player from "../../player";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LyricPage = () => {
  const { state, dispatch } = useContext(MusicContext);
  const { name, author, duration, picUrl, id } = state.music;

  return (
    <LyricContainer showed={state.showLyric} url={picUrl}>
      <span className="backimg">
        <img src={picUrl} alt="..." />
      </span>
      <section className="cover">
        <section
          className="top"
          onClick={() => dispatch({ type: "toggle_lyric" })}
        >
          <FontAwesomeIcon className="icon" icon={faAngleDown} />
        </section>

        <section className="img">
          <img src={picUrl} alt={name} />
        </section>

        <Box p="20px 30px" h="100%" w="100%" className="lyric">
          <H1 className="item name">{name}</H1>
          <H3 className="item author">{`歌手:${author}`}</H3>
          <Lyric />
        </Box>
        <section className="foot">
          <Player lyric_mode={true} />
        </section>
      </section>
    </LyricContainer>
  );
};

export default LyricPage;
