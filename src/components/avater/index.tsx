import * as React from "react";
import styled from "styled-components";

const size = 24
const Img_container = styled.div`
  display: flex;
  height: ${size}px;
  width: ${size}px;
  overflow: hidden;
  border-radius: ${size/2}px;
  background-color: #f2f2f2;
  margin-right: 5px;
`

function Avater({ picUrl }: { picUrl: string }) {
  return <Img_container>
    <img src={picUrl} alt="头像"/>
  </Img_container>;
}

export default Avater;
