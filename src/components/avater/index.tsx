import * as React from "react";
import styled from "styled-components";


const Img_container = styled.div`
  display: flex;
  height: 36px;
  width: 36px;
  /* padding-left: 100%; */
  overflow: hidden;
  border-radius: 18px;
  background-color: #f2f2f2;
`

function Avater({ picUrl }: { picUrl: string }) {
  return <Img_container>
    <img src={picUrl} alt="头像"/>
  </Img_container>;
}

export default Avater;
