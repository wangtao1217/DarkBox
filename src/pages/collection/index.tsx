import React, { useContext, useEffect, useState } from "react";

import { get_user_album } from "../../api/album";
import { CardType } from "../../components/card";
import { Container, Item } from "./style";
import { LogContext } from "../../content/LogContext";

import Card from "../../components/card";

type ListType = {
  type: "created" | "subscribed";
};
const AlbumList = ({ type }: ListType) => {
  const [songs, setSongs] = useState([]);
  const [data, setData] = useState([]);
  const { state } = useContext(LogContext);
  const { islogged, user } = state;
  useEffect(() => {
    if (user.account) {
      
      get_user_album(user.account.id).then((res) => {
        setSongs(res.playlist);  
      });
    }
  }, []);

  useEffect(() => {
    if(type === "created"){
      setData(() => songs.filter((song) => !song.subscribed))
    }else if(type === "subscribed"){
      setData(() => songs.filter((song) => song.subscribed))
    }
  }, [songs]);
  return (
    <Container>
      {data.map((item) => {
        const { name, coverImgUrl, id } = item;
        return (
          <Item key={id}>
            <Card text={name} coverImgUrl={coverImgUrl} id={id} />
          </Item>
        );
      })}
    </Container>
  );
};

export const Created = () => <AlbumList type='created'/>
export const Subscribed = () => <AlbumList type='subscribed'/>
