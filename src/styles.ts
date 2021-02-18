import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        font-size: 16px;
        display: flex;
    }
`;


export const Container = styled.section`
  height:100vh;
  width: 100vw;
  display: flex;
  justify-content: stretch;
  background-color: ${p=> p.theme.bgc.primary};
`


