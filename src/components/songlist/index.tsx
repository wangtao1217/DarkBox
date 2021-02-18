import * as React from "react";
import styled from 'styled-components'

import Table from "./table";
import createMusic, { Music } from "../../utils/create_music";
import { Type } from "../../content/types";
import { MusicContext, AudioContext } from "../../content/MusicContext";
import { song } from "../../api/songs";
import { getAlbum } from "../../api/album";
import { format_time, format_author } from "../../utils/formatter";

import usePlay from "../../hooks/usePlay";


const Wrapper = styled.div`
flex: 1;
    overflow-y: scroll;
    margin-top: 20px;
    box-sizing: border-box;
`

function SongList({width, data }) {
  const { state, dispatch } = React.useContext(MusicContext);
  
  const columns = [
    {
      title: "index",
      key: '0',
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
      key: '1',
      dataIndex: "content",
      render: ({ content }) => {
        return (
          <span className="music-content">
            <span className="name">{content.name}</span>
            <span className="al">{format_author(content.ar)}</span>
          </span>
        );
      },
    },
    {
      title: "time",
      key: '2',
      dataIndex: "time",
      render: ({ time }) => <span>{time}</span>,
    },
  ];

  const dataSource = data?.map((song, index) => {
    const { name, id, dt: duration, ar } = song;
    const { sec, min } = format_time(duration / 1000);
    return {
      index,
      content: {
        name,
        ar,
      },
      id,
      time: `${min}:${sec}`,
    };
  });
  return (
    <Wrapper className="songlist">
      <Table
        dataSource={dataSource}
        columns={columns}
        width={width}
        hidehead={true}
      />
    </Wrapper>
  );
}

export default SongList;
