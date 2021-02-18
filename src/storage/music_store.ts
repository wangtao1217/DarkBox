import LocalStorageFactory from "./storage";


const playHistory = LocalStorageFactory({
    key: 'playhistory',
    defaultvalue: []
});

const setPlayHistory = (music) => {
    let list = playHistory.getItem() || [];
    let index = list.findIndex(item => item.id === music.id)

    if (index > -1) {
        list.splice(index, 1);
    }

    list.unshift(music)
    console.log(list)
    playHistory.setItem(list)

    return list;
};

const playList = LocalStorageFactory({
    key: '__playlist',
    defaultvalue: []
})

const setPlayList = data => {
    playList.setItem(data ? data : [])
}

export {
    playList,
    setPlayList,
    playHistory,
    setPlayHistory,
}