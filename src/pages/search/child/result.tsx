import React, { useState, useCallback, useContext } from "react";

import { ResultContainer } from "./style";
import { MusicContext, AudioContext } from "../../../content/MusicContext";

import { TabMenu, ItemType } from "../../home/topbar/index";
import SongList from "../../../components/songlist";
import { format_time, format_author } from "../../../utils/formatter";
import Card from "../../../components/card";

import { useRouteMatch, Route } from "react-router-dom";

const menu_content: ItemType = [
  {
    title: "单曲",
  },
  {
    title: "歌单",
    route: "songlist",
  },
  {
    title: "专辑",
    route: "album",
  },
];

const Result = ({ result, playlist }) => {
  const { path } = useRouteMatch();
  const [top, setTop] = useState<boolean>(false);
  const { state } = useContext(MusicContext);

  return (
    <ResultContainer top={top}>
      <section className="tabmenu">
        <TabMenu items={menu_content} />
      </section>

      <section className="result">
        <Route exact path={`${path}/`}>
          <SongList
            data={result}
            width={["0 40px", 2, "0 70px"]}
          />
        </Route>
        
        <Route path={`${path}/songlist`}>
          <section
            onScroll={(e) => setTop(e.currentTarget.scrollTop !== 0)}
            className="songlist"
          >
            {playlist?.map((i) => {
              const { name, coverImgUrl, id } = i;
              return (
                <span className="wrapper">
                  <Card name={name} coverImgUrl={coverImgUrl} id={id} />
                </span>
              );
            })}
          </section>
        </Route>
        <Route path={`${path}/album`}>
          <h1 style={{ color: "white" }}>这里啥也没有...</h1>
        </Route>
      </section>
    </ResultContainer>
  );
};

export default Result;
