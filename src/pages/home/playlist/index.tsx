import React, { useMemo, useEffect, useContext, useRef } from "react";

import SongList from "../../../components/songlist";
import { MusicContext } from "../../../content/MusicContext";
import {
  playList as playListLocalStorage,
  playHistory as playHistoryLocalStorage,
} from "../../../storage/music_store";
import { H3 } from "../../../styles";
import Side from "./side";
import { useClickAway } from "react-use";
import { Container } from "./style";

const Playlist = () => {
  const { state, dispatch } = useContext(MusicContext);
  const ref = useRef();
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
  useClickAway(ref, () => {
    if (state.showplaylist) {
      dispatch({
        type: "toggle",
        load: {
          showplaylist: false,
        },
      });
    }
  });
  return (
    <Container show={state.showplaylist} ref={ref}>
      <section className="title">
        <span>播放列表</span>
        <span className="sec">
          <span>{`${playList.length - 1}首歌曲`}</span>
          <span className="terminal">{"清空"}</span>
        </span>
      </section>
      <SongList columns={columns} data={playList} width={[1]} />
      <section
        className="foot"
        onClick={() =>
          dispatch({
            type: "toggle",
            load: {
              showplaylist: false,
            },
          })
        }
      >
        {" "}
        {"收起"}
      </section>
    </Container>
  );
};

export default Playlist;
