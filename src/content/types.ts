import { Music } from '../utils/create_music'


// log types
export interface LogContextType {
    state: LogState,
    dispatch: Function
}

export interface LogState {
    islogged: boolean,
    user: any,
    show: boolean,
}

export interface LogAction {
    type: "log_in" | "log_out" | "show_form" | "toggle",
    load: { user: {} }
}

// music types
export interface MusicContextType {
    state: MusicState,
    dispatch: Function
}

export interface MusicState {
    musicId: number | null;
    music: Music;
    musicUrl?: string;
    playlist?: [] | Array<Music>
    showplaylist?: boolean
    showLyric?: boolean
}

export interface LoadMusic {
    musicId: number;
    music: Music
    playlist: any
    showplaylist?: boolean
}

export interface MusicAction {
    type: "PLAY" | "SET_PLAY_LIST" | "toggle" | "toggle_lyric",
    load: LoadMusic
}

export const Type = {
    PLAY: "PLAY",
    SET_PLAY_LIST: "SET_PLAY_LIST",
    CLEAR_PLAY_LIST: "CLEANE_PLAY_LIST",
    SET_PLAY_MODE: "SET_PLAY_MODE",
    SHOW_LAYOUT: "SHOW_LAYOUT",
    HIDE_LAYOUT: "HIDE_LAYOUT",
    
};



