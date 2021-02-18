import { song } from '../api/songs'
import { useCallback, useState, useContext, useEffect } from 'react'
// import Table from "./table";
import createMusic, { Music } from "../utils/create_music";
import { Type } from "../content/types";
import { MusicContext, AudioContext } from "../content/MusicContext";
import { getAlbum } from "../api/album";

const initial = {
    name: null,
    ar: ["null"],
    duration: 100,
    id: 0,
}

type Initial = {
    name: string | null,
    ar: string[],
    duration: number,
    id: number,
}

type UsePlayType = Function

const usePlay: UsePlayType = () => {
    const { state, dispatch } = useContext(MusicContext);
    const [music, setMusic] = useState<Music>(state.music);

    const handle_dispatch = useCallback((id: number) => {
        song(id).then((res) => {
            setMusic(() => {
                return createMusic({
                    ...res[0],
                    id,
                    picUrl: res[0]?.al.picUrl,
                    duration: res[0].dt / 1000,
                });
            });
        });
       
    }, [setMusic])
    useEffect(()=>{
        dispatch({
            type: Type.PLAY,
            load: { musicId: music.id, music },
        });
    },[music])
    return [music, handle_dispatch]
}

export default usePlay