import React, { useMemo, useContext } from "react";
import styled, { css } from 'styled-components'

import SongList from "../../../components/songlist";
import { MusicContext } from "../../../content/MusicContext";
import {
  playList as playListLocalStorage,
  playHistory as playHistoryLocalStorage,
} from "../../../storage/music_store";
import { H3 } from '../../../styles';

import Side from "./side";

const Container = styled.section`
    position: fixed;
    top: 0;
    width: 320px;
    right: 0;
    height:100vh;
    transform: translateX(${({show})=>show?0:"320px"});
    box-sizing: border-box;
    transition: .3s;
    z-index: 10;
    overflow-y:scrol;
    background-color: #2f2f2f;
`
const Playlist = () => {
  const { state } = useContext(MusicContext);
  const list = React.useMemo(() => state.playlist, [state]);
  const playList = useMemo(() => playListLocalStorage.getItem(), [
    state.musicId,
  ]);
const columns = [{
    title: "index",
    key: "0",
    dataIndex: "index",
    render: ({ index, id }) => {
      return (
        <span className="music-index">
          {id === state.music.id ? "😊" : index}
        </span>
      );
    },
  },
  {
    title: "...",
    key: "1",
    dataIndex: "content",
    render: ({ name, ar }) => {
      return (
        <span className="music-content">
          <H3 >
            {name}
          </H3>
          
        </span>
      );
    },
  },]
  return (
    <Container show={state.showplaylist}>
      <SongList columns={columns} data={playList} width={["0 36px", 1]} />
    </Container>
  );
};

export default Playlist;
