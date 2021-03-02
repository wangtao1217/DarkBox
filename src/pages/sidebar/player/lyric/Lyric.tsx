import React, { useContext, useState, useEffect, useRef } from "react";

import getLyric from "../../../../api/lyric";
import { format_lyric } from "../../../../utils/formatter";

import { AudioContext, MusicContext } from "../../../../content/MusicContext";
import { Wrapper } from './styles'

const Lyric = () => {
  const [lyric, setLyric] = useState([]);
  const [line, setLine] = useState(0);
  const { state } = useContext(AudioContext);
  const { state: music_state } = useContext(MusicContext);
  const { musicId } = music_state;
  const lyric_ref = useRef(null);
  const height = 50;

  // console.log(state)
  useEffect(() => {

    // if (id) {
      getLyric(musicId).then(({lrc}) => {
        setLyric(() => format_lyric(lrc?.lyric))
      });
    // }
  }, [musicId]);

  useEffect(() => {
    if (!state.paused) {
      window.requestAnimationFrame(() => {
        const { time } = state;
        const line_index = lyric.findIndex(([lyr_time, words], index) => {
          const prev_time = index - 1 >= 0 ? lyric[index - 1][0] : lyr_time;
          const next_time =
            index + 1 < lyric.length ? lyric[index + 1][0] : lyr_time;

          if (prev_time <= time && next_time >= time) {
            return true;
          }
        });

        if (line_index > -1) { 
          const scroll_top = height*2 * line_index + line_index*20;
          if (lyric_ref.current) {
            lyric_ref.current.scrollTo({ top: scroll_top, behavior: "smooth" });
          }
          setLine(line_index);
        }
      });
    }
  }, [state]);

  return (
    <Wrapper ref={(ref) => (lyric_ref.current = ref)}>
      {lyric.length > 0 ? (
        lyric.map(([time, lyr], index) => {
          return (
            <span key={index} className={index === line ? "emphasis" : "null"}>
              <p>{lyr}</p>
            </span>
          );
        })
      ) : (
        <span>
          <h3>{"🎧纯音乐..."}</h3>
        </span>
      )}
    </Wrapper>
  );
};

export default Lyric;

// 歌单分类
// 说明 : 调用此接口,可获取歌单分类,包含 category 信息

// 接口地址 : /playlist/catlist

// 调用例子 : /playlist/catlist







// 新歌速递
// 说明 : 调用此接口 , 可获取新歌速递

// 必选参数 :

// type: 地区类型 id,对应以下:

// 全部:0

// 华语:7

// 欧美:96

// 日本:8

// 韩国:16
// 接口地址 : /top/song

// 调用例子 : /top/song?type=96