import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import SongList from "../../../components/songlist";

// import format_Album from '../../hooks/useAlbum'
import { rec_album } from "../../../api/home";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Card from "../../../components/card/index";
import Table from "../../../components/songlist/table";
import Layout from "../../../components/layout/index";
import Discover from "./discover";
import Category from './category'
import { Container } from "./styles";

type AlbumnType = {
  name: string;
  id: number;
  picUrl: string;
  playCount?: number;
  trackNumberUpdateTime: number;
  trackCount: number;
};

function Content() {
  const [albumns, setAlbumns] = useState<Array<AlbumnType>>([]);
  const { path } = useRouteMatch();

  useEffect(() => {
    rec_album(5).then((res) => {
      setAlbumns(res);
    });
  }, [rec_album]);

  return (
    <Container>
      <Switch>
        <Route
          exact
          path={`${path}`}
          children={() => <Discover albumns={albumns} />}
        />
        <Route exact path={`${path}/album`} render={() => <Category/>}/>
      </Switch>
    </Container>
  );
}

export default Content;
