import React, { useReducer, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAudio } from "react-use";
import { GlobalStyle, Container } from "./styles";

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
      <GlobalStyle />
      <LogContext.Provider value={{ state: log_state, dispatch: log_dispatch }}>
        <AudioContext.Provider value={audioInfo}>
          <MusicContext.Provider value={{ state, dispatch }}>
            {audio}
            <Router>
              <Container>
                <SideBar />
                  <Switch>
                    <Route path={"/home"} children={() => <Home />} />
                    <Route path={"/search"} children={() => <Search />} />
                    <Route
                      path={"/detail/:albumId"}
                      children={() => <Detail />}
                    />
                    <Route
                      path={"/albumns"}
                      children={() => <AlbumList type="created" />}
                    />
                    <Route
                      path={"/collections"}
                      children={() => <AlbumList type="subscribed" />}
                    />
                  </Switch>
              </Container>
            </Router>
          </MusicContext.Provider>
        </AudioContext.Provider>
      </LogContext.Provider>
    </>
  );
};

export default App;
