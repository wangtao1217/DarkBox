import styled, { css } from "styled-components";
import { _flex } from "./utils/mixin";


const _textsize = (size) => {
  switch (size) {
    case "h1": return css`
      font-size: "21px";
      color: #79797d;
    `
    case "h2": return css`
    font-size: "18px";
    color: "white";
  `
    case "h3": return css`
    font-size: "14px";
    color: #79797d;
  `
    case "h4": return css`
    font-size: "12px";
    color: #79797d;
  `
  }
}

export const Body = styled.section`
  display: grid;
  grid-template-columns: 220px 1fr;
  height: 100vh;
  width: 100vw;
  min-width:1000px;
  min-height: 670px;
  background-color: ${(p) => p.theme.bgc.primary};
`;

export const Main = styled.section`
position:relative;
  overflow: hidden;
  flex: 1;
  ${_flex({direc: "column"})}  
`;

export const Text = styled.span`
    height: auto;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2 ;
    -webkit-box-orient: vertical;
    box-sizing: border-box;
     /* ${({ size }) => _textsize(size)}; */
`

export const H1 = styled(Text)`
  ${_textsize("h1")}
  font-size: "21px";
      color: #79797d;
`

export const H2 = styled(Text)`
  ${_textsize("h2")}
`

export const H3 = styled(Text)`
  ${_textsize("h3")}
  font-size: "14px";
    color: #79797d;
`
export const H4 = styled(Text)`
  ${_textsize("h4")}
`

export const Container = styled.div`
  ${_flex({f: "1"})}
  width:100%;
  overflow:auto;
`