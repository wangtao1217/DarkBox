
import axios from './axios';
// 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(注意:歌曲封面现在需要通过专辑内容接口获取)

interface ServerResponse{
    songs: ServerData
}

type ServerData = Array<object>


const song =  (id: number|string)  => {
    const response =  axios({
        url: '/song/detail',
        transformResponse: (r: ServerResponse) => r?.songs,
        params: {
            ids: id
        }
    })
    return response;
};

export { song }
