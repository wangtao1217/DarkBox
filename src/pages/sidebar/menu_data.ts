export type ItemType = {
    type: "item" | "subItem",
    content: string
    route: string
    log?: boolean | string
    stick?: boolean
    key?: number
}


const menu_data: Array<ItemType> = [
    {
        type: "item",
        content: "主页",
        route: "/home",
        stick: true,
        key: 0
    },{
        type: "item",
        content: "搜索",
        route: "/search",
        stick: true,
        key: 1
    },
    {
        type: "item",
        content: "喜欢的音乐",
        route: "/detail",
        log: true,
        key: 2
    },
    {
        type: "item",
        content: "我的歌单",
        route: "/albumns",
        log: true,
        key: 3
    },
    {
        type: "item",
        content: "收藏歌单`",
        route: "/collections",
        log: true,
        key: 4

    },
];

export default menu_data