import styled, { css } from "styled-components";
import { _flex } from "./utils/mixin";


export const Body = styled.section`
  display: grid;
  grid-template-columns: 220px 1fr;
  height: 100vh;
  width: 100vw;
  min-width: 1000px;
  min-height: 670px;
  background-color: ${(p) => p.theme.bgc.primary};
`;

export const Main = styled.section`
  position: relative;
  overflow: hidden;
  flex: 1;
  ${_flex({ direc: "column" })}
`;
// height: auto;
// width: 100%;
// color: #f2f2f2;
// overflow: hidden;
// text-overflow: ellipsis;
// display: -webkit-box;
// padding: 0 2px 0 2px;
// -webkit-line-clamp: 1;
// -webkit-box-orient: vertical;
// box-sizing: border-box;
export const Text = styled.span<{line: number}>`
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({line})=>line?line:1};
  -webkit-box-orient: vertical;
  box-sizing: border-box;
  font-size:16px;
`;

export const H1 = styled(Text)`
  font-size: 16px;
  color: #79797d;
  color: white;
        
`;

export const H2 = styled(Text)`
`;

export const H3 = styled(Text)`
  font-size: 14px;
  color: #79797d;
`;
export const H4 = styled(Text)`
  font-size: 12px;
`;

export const Container = styled.div`
  ${_flex({ f: "1" })}
  width:100%;
  overflow: auto;
`;

export const Box = styled.div<{
  p?: String,
  m?: String,
  h: String | number,
  w: String | number,
}>`
  width: ${({ w }) => w};
  height:${({ h }) => h};
  padding:${({ p }) => p};
  margin:${({ m }) => m};
  box-sizing:border-box;
`
