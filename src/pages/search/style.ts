import styled from "styled-components";
import { _flex } from '../../utils/mixin'

import { Container } from "../../styles";

const flexstyles = { direc: "column" }

export const SearchContainer = styled.div`
  ${_flex(flexstyles)}
  width: 100%;
  height:100%;
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
  width: 100%;
    flex-wrap: wrap;
    flex: 1;
    overflow-y: hidden;
    padding: 20px;
    box-sizing: border-box;
  }
`;

export const SugContainer = styled.section`
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
  left: 0;
  width: 100%;
`;
