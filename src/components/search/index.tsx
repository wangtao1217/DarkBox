import * as React from "react";

import {search} from '../../api/search'

import { Wrapper } from "./styles";

function Search() {
  return (
    <Wrapper>
      <input placeholder='搜索音乐' onFocus={() => null}/>
    </Wrapper>
  );
}

export default Search;
