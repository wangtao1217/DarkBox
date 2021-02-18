import React from "react";
import { useHistory } from "react-router-dom";

import { Wrapper } from "./styles";

export interface CardType {
  name: string;
  coverImgUrl?: string;
  id?: number;
}

function Card({ name, coverImgUrl, id }: CardType) {
  const children = React.useRef(null);
  const history = useHistory();
  const handleClick = () => history.push(`/detail/${id}`);
  return (
    <Wrapper ref={children} onClick={handleClick}>
      <div>
        <img src={coverImgUrl} alt={name} />
      </div>
      <span>{name}</span>
    </Wrapper>
  );
}

export default Card;
