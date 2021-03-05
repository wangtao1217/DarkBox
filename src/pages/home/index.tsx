import * as React from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import TopBar from "./topbar/index";
import Content from "./body/index";

const Home_container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 70px 1fr;
`;



const Home = () => {
  return (
    <Home_container>
      <TopBar />
      <Content />
    </Home_container>
  );
}

export default Home;
