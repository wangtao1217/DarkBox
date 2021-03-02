import styled from "styled-components";
import { Container } from "../../../../styles";
import { _flex } from "../../../../utils/mixin";

export const Wrapper = styled.section`
  color: #9c9c9c;
  height: 400px;
  width: 100%;
  right: 0;
  overflow-y: auto;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  span {
    height: 50px;
  }
  .emphasis {
    color: ${({ theme }) => theme.bgc.active};
  }
`;

export const LyricContainer = styled(Container)<{ showed: boolean }>`
  .backimg {
    top: -50vh;
    left: 0;
    width: 100%;
    position: absolute;
    img{ width: 100%; }
  }
  overflow: hidden;
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateY(${({ showed }) => (showed ? 0 : "100vh")});
  transition: 0.3s;
  .cover {
    backdrop-filter: blur(18px);
    background-color: rgba(10, 10, 12, 0.7);
    height: 100vh;
    width: 100vw;
    z-index: 2000;
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    /* grid-area:; */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px 1fr 80px;
    section {
    }
    .top {
      grid-column: 1 / 3;
    }
    .foot {
      grid-column: 1 / 3;
      width: 100%;
      height: 80px;
      box-sizing: border-box;
      padding: 0 50px;
    }
    .lyric {
      ${_flex({ direc: "column" })}
      height:100%;
      padding: 20px 0;
      overflow: auto;
      width: 100%;
      .name {
        font-size: 27px;
        color: white;
        ${_flex({ direc: "column" })}
        margin-bottom: 12px;
      }
      .author {
        ${_flex({ direc: "column" })}
        font-size: 14px;
        color: rgba(120, 120, 120);
        margin-bottom: 30px;
      }
    }
    .img {
      ${_flex({})}
      img {
        width: 360px;
      }
      width: 100%;
      height: 100%;
    }
  }
`;
