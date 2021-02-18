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
  const { state } = useContext(LogContext);
  const { islogged, user } = state;

  useEffect(() => {
    if (user.account) {
      get_user_album(user.account.id).then((res) => {
        setSongs(res.playlist);
        console.log(res);
      });
    }
  }, []);

  const created = songs.filter((song) => !song.subscribed);
  const subscribed = songs.filter((song) => song.subscribed);

  if (type === "subscribed") {
    return (
      <Container>
        {subscribed.map((item: CardType) => {
          const { name, coverImgUrl, id } = item;
          return (
            <Item key={id}>
              <Card name={name} coverImgUrl={coverImgUrl} id={id} />
            </Item>
          );
        })}
      </Container>
    );
  } else if (type === "created") {
    return <Container>
    {created.map((item: CardType) => {
      const { name, coverImgUrl, id } = item;
      return (
        <Item key={id}>
          <Card name={name} coverImgUrl={coverImgUrl} id={id} />
        </Item>
      );
    })}
  </Container>;
  }
};

export default AlbumList;
