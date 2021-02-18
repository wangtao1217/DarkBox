import axios from './axios'

export type SearchType = {
    keywords: string
    limit?: number
    type?: | 1  //单曲
    | 10        //专辑
    | 100       //歌手
    | 1000      //歌单
    | 1018      //综合
}

export const search = ({ keywords, limit, type }: SearchType) => {
    return axios({
        url: "/search",
        params: {
            keywords,
            limit: 30,
            // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
            type: type ? type : 1
        }
    })

}

export const hot_search = () => {
    return axios.get("/search/hot/detail")
}

export const suggest_search = (keywords: string) => {
    return axios({
        url: "/search/suggest",
        params: {
            keywords,
            type: "mobile"
        }
    })
}

export const default_words = () => {
    return axios.get("/search/default")
}