import * as React from "react";

import { Container } from "./styles";
import { AlbumType } from "../index";

const Info = ({ name, description, tags, coverImgUrl }: AlbumType) => {
  return (
    <Container>
      <span className="img">
        <img src={coverImgUrl} alt={name}></img>
      </span>
      <section className="text">
        <span className="text m">{name}</span>
        <span className="description m">{description}</span>
        <span className="tags m">
          {tags?.map((item: string) => (
            <span key={item}>{item}</span>
          ))}
        </span>
      </section>
    </Container>
  );
};

export default Info;
