import styled from "styled-components";
import { _flex } from "../../../utils/mixin";

export const Container = styled.div<{ occupy: boolean }>`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
  height:  ${({ occupy }) => (occupy ? "80px" : 0)};
  padding: 0 12px;
  box-sizing: border-box;
  margin-top: auto;
  transition: 0.3s;
  z-index: 500;
  bottom: 0;
  position: relative;
  align-items: center;
  justify-content: center;
  color: white;
  .range {
    position: absolute;
    height: 5px;
    width: 100%;
    top: 0;
    left: 0;
  }

  .text {
    display: flex;
    width: 110px;
    flex-direction: column;
  }

  .text span {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    margin: 1px;
    margin-left: 12px;
    box-sizing: border-box;
    padding: 2px 0;
    /* font-size: 14px; */
  }
  
`;

export const Center = styled.section`
  ${_flex({})}
  flex:2;
  i {
    margin: 0 2px;
    height: 40px;
    width: 32px;
    background-color: #f2f2f2; 
  }
  .normal{
    cursor: pointer;
    width:36px;
    font-size:18px;
    transition:.2s;
    color:  ${(p) => p.theme.text.secondary};
    &:hover{
      color: rgba(97,122,255,1);
    }
  }
  .icon{
    cursor: pointer;
    font-size: 21px;
    height:24px; 
    width:24px;
    color:  ${(p) => p.theme.text.secondary};
    margin:5px;
  }
  .play{ font-size: 32px;  height:40px; 
    width:40px;
    color:rgba(97,122,255,1);}
`;

export const Left = styled(Center)<{hovered: boolean}>`
  justify-content: flex-start;

  .infor-img {
    overflow: hidden;
    width: 50px;
    height: 0;
    background-color: ${(p) => p.theme.bgc.primary};
    padding-bottom: 50px;
    border-radius: 2px;
    position: relative;
    span{
      cursor: pointer;
      height:100%;
      width:100%;
      top:0;
      left:0;
      background-color: rgba(20,20,30,.7);
      position:absolute;
      ${_flex({})}
      font-size:21px;
    }
    img {
      width: 100%;
    }
  }
`;
export const Right = styled(Center)`
  justify-content: flex-end;
`;
