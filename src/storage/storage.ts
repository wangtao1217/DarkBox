import { Storage } from './types'

const LocalStorageFactory = (params: Storage) => {
    const { key, defaultvalue } = params;

    const setItem = (value: object) => {
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