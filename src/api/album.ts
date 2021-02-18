
import axios from "./axios";

import  createMusic  from "../utils/create_music";

type Response = {
  playlist: Array<any>
}

export const getAlbum =  async (id) => {
  const response =  await axios({
    url: "/playlist/detail",
    params: {
      id,
    },
  })
  const songs = [];
  return response;
};

export const del_playList = (id) => {
  const response = axios({
    url: "/playlist/subscribe",
    params: {
      id,
      t: 2
    },
  });

};

export const col_playList = (id) => {
  const response = axios({
    url: "/playlist/subscribe",
    params: {
      t: 1,
      id,
    },
  });

};

export const get_user_album = (uid) => {
  const response =  axios({
    url: '/user/playlist',
    params: {
      uid,
      limit: 20,
    }
  })

  return response
}
