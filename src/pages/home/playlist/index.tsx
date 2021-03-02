import React, { useMemo, useContext } from "react";
import styled, { css } from "styled-components";

import SongList from "../../../components/songlist";
import { MusicContext } from "../../../content/MusicContext";
import {
  playList as playListLocalStorage,
  playHistory as playHistoryLocalStorage,
} from "../../../storage/music_store";
import { H3 } from "../../../styles";
import { _flex } from "../../../utils/mixin";
import Side from "./side";

const Container = styled.section`
  .title {
    color: white;
    font-size: 24px;
    margin: 30px 20px 20px 20px;
    ${_flex({ direc: "column", row: "flex-start" })}
    .sec {
      margin-top: 10px;
      font-size: 14px;
      color: rgba(120, 120, 120);
    }
  }
  .foot{
    color: white;
    ${_flex({ direc: "column", row: "flex-end" })}
    padding: 20px;
  }
  .songlist {
    .row {
      padding: 7px 15px;
    }
  }
  .music-content {
    width: 100%;
  }
  .name {
    width: 170px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .sec {
    ${_flex({})}
    width: 100%;
    justify-content: space-between;
  }
  display: grid;
  grid-template-rows: 100px 1fr 80px;
  position: fixed;
  top: 0;
  width: 320px;
  right: 0;
  height: 100vh;
  transform: translateX(${({ show }) => (show ? 0 : "320px")});
  box-sizing: border-box;
  transition: 0.3s;
  z-index: 9000;
  overflow-y: scrol;
  background-color: ${({ theme }) => theme.bgc.primary};
  box-shadow: -6px 0 20px 2px rgba(10, 10, 10, 0.3);
`;
// ==================================================== //

const Playlist = () => {
  const { state, dispatch } = useContext(MusicContext);
  const list = React.useMemo(() => state.playlist, [state]);
  const playList = useMemo(() => playListLocalStorage.getItem(), [
    state.musicId,
  ]);
  const columns = [
    {
      title: "...",
      key: "1",
      dataIndex: "content",
      render: ({ name, author, time }) => {
        return (
          <span className="music-content">
            <span className="name">{name}</span>
            <span className="sec">
              <span>{author}</span>
              <span>{time}</span>
            </span>
          </span>
        );
      },
    },
  ];
  return (
    <Container show={state.showplaylist}>
      <section className="title">
        <span>播放列表</span>
        <span className="sec">
          <span>{`${playList.length - 1}首歌曲`}</span>
          <span className="terminal">{"清空"}</span>
        </span>
      </section>
      <SongList columns={columns} data={playList} width={[1]} />
  <section className="foot" onClick={()=>dispatch({ type: "toggle" })}> {"收起"}</section>
    </Container>
  );
};

export default Playlist;
