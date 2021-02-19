import * as React from "react";

import { Container } from "./styles";
import { AlbumType } from "../index";
import { Text } from "../../../styles";

const Info = ({ name, description, tags, coverImgUrl }: AlbumType) => {
  return (
    <Container>
      <span className="img">
        <img src={coverImgUrl} alt={name}></img>
      </span>
      <section className="text">
        <Text size="h2">{name}</Text>
        <Text className="description m">{description}</Text>
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
