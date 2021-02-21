export type ItemType = {
    type: "item" | "subItem",
    content: string
    route: string
    log?: boolean | string
    stick?: boolean
    key?: number
    icon?: string
}


const menu_data: Array<ItemType> = [
    {
        type: "item",
        content: "主页",
        route: "/home",
        stick: true,
        key: 0,
        icon: "💻"
    },{
        type: "item",
        content: "搜索",
        route: "/search",
        stick: true,
        key: 1,
        icon: "🔍"
    },
    {
        type: "item",
        content: "喜欢的音乐",
        route: `/detail:`,
        log: true,
        key: 2,
        icon: "♥"

    },
    {
        type: "item",
        content: "我的歌单",
        route: "/created",
        log: true,
        key: 3,
        icon: "💻"

    },
    {
        type: "item",
        content: "收藏歌单`",
        route: "/subscribed",
        log: true,
        key: 4,
        icon: "💻"

    },
];

export default menu_data