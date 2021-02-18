import * as React from "react";

type MusicList = {
  list: Array<Element>;
};

function index({ list }: MusicList) {
  return <div>{list.map((item, index) => {
      return item
  })}</div>;
}

export default index;
