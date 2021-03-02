import React, { useContext } from "react";
import Lyric from "./Lyric";
import { LyricContainer } from "./styles";
import { MusicContext } from "../../../../content/MusicContext";
import { H1, H3 } from "../../../../styles";
import Player from "../../player";

// const Container =
const LyricPage = () => {
  const { state, dispatch } = useContext(MusicContext);
  const { name, author, duration, picUrl, id } = state.music;

  return (
    <LyricContainer showed={state.showLyric} url={picUrl}>
      <span className="backimg">
      <img  src={picUrl} alt="..." />
      </span>
      <section className="cover">
        <section
          className="top"
          onClick={() => dispatch({ type: "toggle_lyric" })}
        >
          <span className="close">X</span>
        </section>

        <section className="img">
          <img src={picUrl} alt={name} />
        </section>

        <section className="lyric">
          <span className="item name">{name}</span>
          <span className="item author">{`歌手:${author}`}</span>
          <Lyric />
        </section>
        <section className="foot">
          <Player lyric_mode={true}/>
        </section>
      </section>
    </LyricContainer>
  );
};

export default LyricPage;
