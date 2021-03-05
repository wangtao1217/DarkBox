import React from "react";
import { useHistory } from "react-router-dom";

import { Wrapper } from "./styles";
import { H3, H4 } from "../../styles";
import { JsxElement } from "typescript";
export interface CardType {
  content?:any;
  text?: String;
  coverImgUrl?: string;
  id?: number;
  callback?: Function;
}

function Card({ text, content, coverImgUrl, id, callback }: CardType) {
  const history = useHistory();
  const handleClick = () => history.push(`/detail/${id}`);

  return (
    <Wrapper id={id} onClick={callback ? callback : handleClick}>
      <div>
        <img src={coverImgUrl}  />
      </div>
      <H3>{text||content}</H3>
    </Wrapper>
  );
}

export default Card;
