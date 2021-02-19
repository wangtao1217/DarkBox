import React, { useReducer, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAudio } from "react-use";
import {  Container, Main } from "./styles";

import SideBar from "./pages/sidebar/index";
import Search from "./pages/search";
import Home from "./pages/home/index";
import AlbumList from "./pages/collection";
import Detail from "./pages/detail";
import Lyric from "./pages/sidebar/player/lyric";

import {
  AudioContext,
  MusicContext,
  music_reducer,
  initial,
} from "./content/MusicContext";
import { LogContext, log_reducer, log_initial } from "./content/LogContext";



export const routes = [
  {
      path: "/home",
      render: <Home/>
  }, {
      path: "/search",
      render: <Search/>
  }, {
      path: "/detail/:albumId",
      render: <Detail/>
  },
  // {
  //     path: "/albumns",
  //     render: () => <AlbumList>
  // }
]


const App = () => {
  const [state, dispatch] = useReducer(music_reducer, initial);
  const [log_state, log_dispatch] = useReducer(log_reducer, log_initial);
  const { musicUrl } = state;


  const [audio, audioState, audioControls, audioRef] = useAudio({
    src: musicUrl,
  });

  const audioInfo = useMemo(() => {
    return {
      audio,
      state: audioState,
      controls: audioControls,
      ref: audioRef,
    };
  }, [audio, audioState, audioControls, audioRef]);

  useEffect(() => {
    audioControls.play();
  }, [state]);
  return (
    <>
      <LogContext.Provider value={{ state: log_state, dispatch: log_dispatch }}>
        <AudioContext.Provider value={audioInfo}>
          <MusicContext.Provider value={{ state, dispatch }}>
            {audio}
            <Router>
              <Container>
                <SideBar />
                <Main>
                  <Lyric/>
                  <Switch>
                    {routes.map(({ path, render }, i: number) => {
                      return <Route key={i} path={path} children={()=>render} />;
                    })} 
                  </Switch>
                </Main> 
              </Container>
            </Router>
          </MusicContext.Provider>
        </AudioContext.Provider>
      </LogContext.Provider>
    </>
  );
};

export default App;
