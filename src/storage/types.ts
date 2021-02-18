export type Key = '__session' | '__playlist' | 'playhistory' | 'playmode'

export interface Storage {
    key: Key;
    defaultvalue: [] | {} | string
}
