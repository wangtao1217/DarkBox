import { createContext } from 'react'

import { MusicContextType, MusicAction, MusicState, Type } from "./types"

import { setPlayHistory, setPlayList } from '../storage/music_store'
import musicUrl from '../api/musicUrl'

const initial = {
    musicId: 0,
    music: {
        name: null,
        id: 0,
        ar: []
    }
}

const music_reducer = (state: MusicState, { type, load }: MusicAction) => {
    switch (type) {
        case Type.PLAY:
            if (!load) {
                return { ...state };
            }
            
            setPlayHistory(load.music);
            setPlayList(load.playList);

            return {
                ...state,
                musicId: load.musicId,
                musicUrl: musicUrl(load.musicId),
                music: load.music,
            };
        case Type.SET_PLAY_LIST:

        default:
            return null;
    }
};

const music_context: MusicContextType = {
    state: initial,
    dispatch: () => { }
}

const audio_context = {
    audio: null,
    state: null,
    controls: null,
    ref: null
}

const MusicContext = createContext(music_context)
const AudioContext = createContext(audio_context)

export {
    music_reducer,
    initial,
    MusicContext,
    AudioContext
}