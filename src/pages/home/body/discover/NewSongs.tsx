import React from "react";
import { Section } from "./style";
import Card from "../../../../components/card";
import { format_author } from "../../../../utils/formatter";
import { H2, H3, H4 ,Text} from "../../../../styles";
import usePlay from "../../../../hooks/usePlay"

const NewSongs = ({ songs }) => {
    const [music, onPlay] = usePlay();
  return (
    <Section>
      <span className="title">{"最新音乐"}</span>
      <span className="line new">
        {songs?.map((song) => {
          return (
            <span className="item" key={song.id}>
              <Card
              id={song.id}
              callback={({currentTarget})=>{
                 const id = currentTarget.getAttribute("id")
                 console.log(id);
                 
                 onPlay({musicId:id})
              }}
                coverImgUrl={song.album.picUrl}
                content={
                  <span className="content">
                    <span className="name s">{song.name}</span>
                    <span  className="artist s">{format_author(song.artists)}</span>
                  </span>
                }
             / >
            </span>
          );
        })}
      </span>
    </Section>
  );
};

export default NewSongs;
