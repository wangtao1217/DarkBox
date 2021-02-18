import * as React from 'react'
import { useState } from 'react'


import create_music from '../utils/create_music'
import { getAlbum } from '../api/album'

type data = {

}

type useAlbumType = (albumId: number) => []

// const format_Album = (id: number) => {
//     const [state, setState] = useState(null);
//     const [data, setData] = useState();
//     const [musics, setMusics] = useState();

//     getAlbum(id).then(res => {
//         console.log(res?.playlist);
//         // setState(res.playlist)
//     })
//     return [data, musics]
// }

// export default format_Album