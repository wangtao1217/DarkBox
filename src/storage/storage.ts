export type Key = '__session'
    | '__playlist'
    | '__playhistory'
    | '__playmode'
    | "__playmodle"

export interface Storage {
    key: Key;
    defaultvalue: [] | {} | string
}


const LocalStorageFactory = (params: Storage) => {
    const { key, defaultvalue } = params;

    const setItem = (value) => {
        const data: string = JSON.stringify(value)
        window.localStorage.setItem(key, data || String(defaultvalue));
    };

    const getItem = () => {
        const list = window.localStorage.getItem(key) || JSON.stringify(defaultvalue);
        return JSON.parse(list);
    }

    const removeItem = () =>  window.localStorage.removeItem(key);

    return {
        setItem,
        getItem,
        removeItem,
    };
} ;

export default LocalStorageFactory