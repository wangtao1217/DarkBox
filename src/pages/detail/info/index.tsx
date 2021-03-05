import * as React from "react";

import { Container, Button } from "./styles";
import { AlbumType } from "../index";
import { Text, H1 } from "../../../styles";

const Info = ({ name, description, tags, coverImgUrl }: AlbumType) => {
  return (
    <Container>
      <span className="img">
        <img src={coverImgUrl} alt={name}></img>
      </span>
      <section className="text">
        <span className="title">{name}</span>
        <span className="des">{description}</span>
        <span className="tags m">
          {tags?.map((item: string) => (
            <span key={item}>{`#${item}`}</span>
          ))}
        </span>
        <span>
        <Button>播放全部</Button>
        <Button>收藏</Button>
        </span>
      </section>
    </Container>
  );
};

export default Info;
