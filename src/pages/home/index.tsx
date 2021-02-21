import * as React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";

import { Container } from "../../styles";
import TopBar from "./topbar/index";
import Content from "./body/index";
import PlayList from './playlist'

const Home_container = styled.section`
display:flex;
height:100vh;
width:100%;
  flex-direction: column;
`;
function Home() {
  const { path } = useRouteMatch();
  return (
    <Home_container>
        <TopBar />
        <Content />
    </Home_container>
  );
}

export default Home;
