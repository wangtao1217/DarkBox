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

const Home_container = styled(Container)`
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
