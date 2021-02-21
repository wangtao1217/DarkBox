export interface Music {
    musicId?: number
    name: string | null;
    id: null | number;
    picUrl?: string | null;
    duration?: number;
    dt?: number;
    ar?: any;
    al?: {
        id: string
        name: string
        pic?: number
        picUrl?: string
        pic_str: string
    }
}

export default function create_music({ id, name, duration, ...others }: Music): Music {
    return {
        id,
        name,
        duration,
        ...others
    }
}
