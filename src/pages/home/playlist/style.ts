import styled from 'styled-components'
import { _flex } from "../../../utils/mixin";


export const Container = styled.section`
  .title {
    color: white;
    font-size: 24px;
    margin: 30px 20px 20px 20px;
    ${_flex({ direc: "column", row: "flex-start" })}
    .sec {
      margin-top: 10px;
      font-size: 14px;
      color: rgba(120, 120, 120);
    }
  }
  .foot {
    color: white;
    ${_flex({ direc: "column", row: "flex-end" })}
    padding: 20px;
  }
  .songlist {
    .row {
      padding: 7px 15px;
    }
  }
  .music-content {
    width: 100%;
  }
  .name {
    width: 170px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .sec {
    ${_flex({})}
    width: 100%;
    justify-content: space-between;
  }
  display: grid;
  grid-template-rows: 100px 1fr 80px;
  position: fixed;
  top: 0;
  width: 320px;
  right: 0;
  height: 100vh;
  transform: translateX(${({ show }) => (show ? 0 : "320px")});
  box-sizing: border-box;
  transition: 0.3s;
  z-index: 9000;
  overflow-y: scrol;
  background-color: ${({ theme }) => theme.bgc.primary};
  box-shadow: -6px 0 20px 2px rgba(10, 10, 10, 0.3);
`;