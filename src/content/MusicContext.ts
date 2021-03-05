import { createContext } from 'react'

import { MusicContextType, MusicAction, MusicState, Type } from "./types"

import { setPlayHistory, setPlayList, playList as playListLocalStorage } from '../storage/music_store'
import musicUrl from '../api/musicUrl'

export const initial = {
    musicId: 0,
    music: {
        name: null,
        id: 0,
        ar: []
    },
    showplaylist: false
}

export const music_reducer = (state: MusicState, { type, load }: MusicAction) => {
    switch (type) {
        case Type.PLAY:
            if (!load) return { ...state };

            setPlayHistory(load.music);
            setPlayList(load.playlist)

            return {
                ...state,
                musicId: load.musicId,
                musicUrl: musicUrl(load.musicId),
                music: load.music,
            };
        case "toggle":
            return {
                ...state,
                showplaylist:load.showplaylist 
            }
        case "toggle_lyric":
            return {
                ...state,
                showLyric: !state.showLyric
            }
        default:
            return null;
    }
};

export const music_context: MusicContextType = {
    state: initial,
    dispatch: () => { }
}

export const audio_context = {
    audio: null,
    state: null,
    controls: null,
    ref: null
}

export const MusicContext = createContext(music_context)
export const AudioContext = createContext(audio_context)

