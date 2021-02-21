import { song } from '../api/songs'
import { useCallback, useState, useContext, useEffect, useMemo } from 'react'
// import Table from "./table";
import createMusic, { Music } from "../utils/create_music";
import { Type } from "../content/types";
import { MusicContext, AudioContext } from "../content/MusicContext";
import { getAlbum } from "../api/album";

import {
    playList as playListLocalStorage,
} from "../storage/music_store";


type UsePlayType = Function

const usePlay: UsePlayType = () => {
    const { state, dispatch } = useContext(MusicContext);
    const [music, setMusic] = useState<Music | any>(state.music);
    const [list, setList] = useState(playListLocalStorage.getItem());

    const playList = useMemo(() => playListLocalStorage.getItem(), [
        state.musicId,
    ]);

    const handle_dispatch = useCallback(({ musicId, playlist }) => {
        song(musicId).then((res) => {
            let { al, dt } = res[0]
            dispatch({
                type: Type.PLAY,
                load: {
                    musicId, music: createMusic({
                        ...res[0],
                        musicId,
                        picUrl: al.picUrl,
                        duration: dt / 1000,
                    }),
                    playlist
                },
            });
        });

    }, [setMusic, setList])
    const playNext = useCallback(() => {
        let i = playList.findIndex((music) => music.id === state.musicId);
        if (i == (playList.length - 1)) {
            i = -1
        }
        let nextId = playList[(i += 1)].id;

        handle_dispatch({ musicId: nextId, playlist: playList });
    }, [playList, handle_dispatch]);

    const playPrev = useCallback(() => {
        let i = playList.findIndex((music) => music.id === state.musicId);
        if (i == 0) {
            i = (playList.length - 1)
        }
        let prevId = playList[(i - 1)].id;
        handle_dispatch({ musicId: prevId, playlist: playList });
    }, [playList, handle_dispatch]);

    const randomPlay = useCallback(() => {
        let randomIndex = Math.floor(Math.random() * playList.length)
        alert(randomIndex)

        let musicId = playList[randomIndex].id;
        handle_dispatch({ musicId, playlist: playList });

    }, [playList, handle_dispatch])
    return [music, handle_dispatch, playPrev, playNext, randomPlay]
}

export default usePlay