import styled from "styled-components";
import { Container } from "../../../styles";
import theme from "../../../theme";

const TEXT = theme.text.text;

const Table_container = styled.section`
  display: flex;
  min-height: 40px;
  width: 100%;
  color: ${(p) => p.theme.text.secondary};
  flex-direction: column;
  over .head {
    display: flex;
    padding: 2px 5px;
    width: 100%;
    height: 42px;
    color: TEXT;
    box-sizing: border-box;
  }
  .body {
    color: TEXT;
    width: 100%;
    height: 42px;
    display: flex;
    flex-direction: column;
    flex: 1;
    .row {
      display: flex;
      transition: 0.3s;

      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: ${(p) => p.theme.bgc.secondary};
      }
    }
    .music-content {
      display: flex;
      flex-direction: column;
      margin: 7px 0;

      .name {
        color: ${(p) => p.theme.text.primary};
        font-size: 18px;
        margin-bottom: 5px;
      }
      .al {
        font-size: 14px;
      }
    }
  }
`;
const Cell = styled.div<{ width }>`
  display: flex;
  flex: ${(p) => (p.width ? p.width : 1)};
  padding: 5px;
  min-height: 40px;
  box-sizing: border-box;
  align-items: center;
`;

export { Table_container, Cell };
