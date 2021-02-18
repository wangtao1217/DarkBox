export default function getMusicUrl(id: number) {
    return String(`https://music.163.com/song/media/outer/url?id=${id}.mp3`)
}