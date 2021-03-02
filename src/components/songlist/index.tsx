import * as React from "react";
import styled from "styled-components";

import Table from "./table";
import createMusic, { Music } from "../../utils/create_music";
import { Type } from "../../content/types";
import { MusicContext, AudioContext } from "../../content/MusicContext";
import { song } from "../../api/songs";
import { getAlbum } from "../../api/album";
import { format_time, format_author } from "../../utils/formatter";

import usePlay from "../../hooks/usePlay";
import { Text } from "../../styles";

const Wrapper = styled.div`
  flex: 1;
  overflow-y: scroll;
  box-sizing: border-box;
`;

function SongList({
  width,
  data,
  columns,
}: {
  width: any;
  data: any;
  columns?: any;
}) {
  const { state } = React.useContext(MusicContext);

  const columnsdefault = [
    {
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
            <Text size="h2" className="name">
              {name}
            </Text>
            <Text size="h3" className="al">
              {format_author(ar)}
            </Text>
          </span>
        );
      },
    },
    {
      title: "time",
      key: "2",
      dataIndex: "time",
      render: ({ time }) => <span>{time}</span>,
    },
  ];

  const dataSource = data?.map((song, index) => {
    const { name, id, dt, al, ar } = song;
    const { sec, min } = format_time(dt / 1000);
    return createMusic({
      ...song,
      musicId: id,
      picUrl: al.picUrl,
      time: `${min}:${sec}`,
      duration: dt / 1000,
      index,
      author:format_author(song.ar)
    });
  });

  return (
    <Wrapper className="songlist">
      <Table
        dataSource={dataSource}
        columns={columns ? columns : columnsdefault}
        width={width}
        hidehead={true}
      />
    </Wrapper>
  );
}

export default SongList;
