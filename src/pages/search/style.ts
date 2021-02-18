import styled from "styled-components";

import { Container } from "../../styles";

export const SearchContainer = styled(Container)`
  flex-direction: column;
  .input {
    display: flex;
    flex: 0 70px;
    width: 100%;
position: relative;
    input {
      height: 70px;
      padding: 0 20px;
      width: 100%;
      font-size: 20px;
      outline: none;
      border: none;
      background-color: rgba(100, 100, 100, 0.2);
      margin: 20px;
      border-radius: 4px;
      &::placeholder {
        color: ${(p) => p.theme.text.secondary};
      }
      color: ${(p) => p.theme.text.primary};
    }
    
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    overflow-y: hidden;
    padding: 25px;
    box-sizing: border-box;
  }
`;

export const SugContainer = styled.section`
position: absolute;
top: 100px;
display: flex;
flex-direction:column;
left:0;
width:100%;
`