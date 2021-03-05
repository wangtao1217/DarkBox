import axios from './axios';

interface Response {
    result: Data
}
type Data = {
    name: string
    id: number
    picUrl: string
    playCount?: number
    trackNumberUpdateTime: number
    trackCount: number
}[]

export const rec_album = async (limit: number) => {
    const response: any = axios.request<Response>({
        url: '/personalized',
        params: {
            limit
        }
    })

    return (await response).result
}

export const category = (limit) => {
    return axios({
        url: '/top/playlist/highquality',
        params: {
            limit
        }
    })

}

export const homepage = () => {
    return axios({
        url: '/homepage/dragon/ball',
    })
}