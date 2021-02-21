import LocalStorageFactory from "./storage";


export const playHistory = LocalStorageFactory({
    key: '__playhistory',
    defaultvalue: []
});

export const setPlayHistory = (music) => {
    let list = playHistory.getItem() || [];
    let index = list.findIndex(item => item.id === music.id)

    if (index > -1) {
        list.splice(index, 1);
    }

    list.unshift(music)
    playHistory.setItem(list)

    return list;
};

export const playList = LocalStorageFactory({
    key: '__playlist',
    defaultvalue: []
})

export const setPlayList = data => {
    playList.setItem(data ? data : [])
}

export const playModle = LocalStorageFactory({
    key: "__playmodle",
    defaultvalue: "singleloop"
})
