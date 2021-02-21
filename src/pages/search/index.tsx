import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useContext,
} from "react";
import { SearchContainer, SugContainer } from "./style";

import { Switch, useHistory, useRouteMatch, Route } from "react-router-dom";
import { MusicContext, AudioContext } from "../../content/MusicContext";

import {
  search,
  hot_search,
  suggest_search,
  default_words,
} from "../../api/search";
import { song } from "../../api/songs";
import Result from "./child/result";
import Hot from "./child/hot";

export type HotSearchType = {
  searchWord: string;
  score: number;
  content: string;
  iconUrl: string;
  iconType: 1 | 5;
};

//====== CComponent ======
const Search = () => {
  const input_ref = useRef<any>();
  const { path } = useRouteMatch();
  const history = useHistory();

  const [value, setValue] = useState<string | null>(null);
  const [result, setResult] = useState([]);
  const [playlist, setPlaylist] = useState(null);
  const [hot, setHot] = useState<HotSearchType[]>([]);
  const [defaultwords, setDefaultwords] = useState<string>("...");
  // const [suggest, setSuggest] = useState<object>();

  const onSearch = useCallback(
    (e,type) => {
      const keywords = input_ref.current?.value;
      if (e.code === "Enter"||type==true) {
        history.push(`${path}/result`);
        search({ keywords }).then(({ result }) => {
          let ids = result.songs.map(({ id }) => id).join(",");
          song(ids).then((res) => setResult(res));
        });
        search({ keywords, type: 1000 }).then(({ result }) =>
          setPlaylist(result?.playlists)
        );
      }
    },
    [setResult, setPlaylist]
  );
const handleSearch = e => onSearch(e, false) 
  useEffect(() => {
    hot_search().then((res) => setHot(res?.data));
    // suggest_search(value).then(({ result }) => {
    //   // setSuggest(result.allMatch)
    // });
    default_words().then(({ data }) => {
      setDefaultwords(data.realkeyword);
      if (input_ref.current) {
        input_ref.current.value = data?.realkeyword;
        input_ref.current.placeholder = data.realkeyword;
      }
    });
  }, []);

  return (
    <SearchContainer>
      <section className="input">
        <input
          ref={input_ref}
          type="input"
          placeholder={defaultwords}
          onChange={(e) => setValue(() => e.target.value)}
          onFocus={(e) => document.addEventListener("keydown", handleSearch)}
          onBlur={(e) => document.removeEventListener("keydown", handleSearch)}
        />
      </section>
      <section className="content">
        <Switch>
          <Route
            exact
            path={`${path}`}
            render={() => (
              <Hot hot={hot} search={onSearch} input_ref={input_ref} />
            )}
          />
          <Route
            path={`${path}/result`}
            render={() => <Result result={result} playlist={playlist} />}
          />
        </Switch>
      </section>
    </SearchContainer>
  );
};

export default Search;
