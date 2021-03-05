
import axios from './axios';
// 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(注意:歌曲封面现在需要通过专辑内容接口获取)

interface ServerResponse {
    songs: ServerData
}

type ServerData = Array<object>


const song = (id: number | string) => {
    const response = axios({
        url: '/song/detail',
        transformResponse: (r: ServerResponse) => r?.songs,
        params: {
            ids: id
        }
    })
    return response;
};


// 全部:0
// 华语:7
// 欧美:96
// 日本:8
// 韩国:16

export const new_song = (type: 0 | 7 | 96 | 8 | 16) => {
    return axios({
        url: '/top/song',
        params: {
            type
        }
    })
}
export { song }
