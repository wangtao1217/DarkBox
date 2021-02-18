interface Time {
    sec: string,
    min: string
}

type Authors = { name: string }[]

export const formatNum = (num, n = 2) => {
    let len = num.toString().length;
    while (len < n) {
        num = "0" + num;
        len++;
    }
    return num;
};

export const format_time = (interval: number): Time => {
    interval = Math.floor(interval || 0);
    const min = formatNum(Math.floor(interval / 60));
    const sec = formatNum(interval % 60);
    return {
        min,
        sec,
    };
};

export const format_author = (arr: Authors): string => {
    if(!arr)return null
    if(arr.length === 1){
        return arr[0].name
    }
    let authors = []
    arr.map(x => authors.push(x.name))
    return authors.join('/')
}

export const format_lyric = (str) => {
    const item = str
    const lines = item?item.split('\n'):[]

    const lyric = lines.map( i => {
        let temp = i.split(']')
        if(temp.length < 2)return '...'
        let time = i.match(/\[[^\[\]\n]*\]/g)[0].slice(1,-2).split(':')
        time = Number(time[0] + time[1])
        return [time, temp[1]]
    })

    return lyric
}
