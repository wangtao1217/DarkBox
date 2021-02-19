import styled from "styled-components";


export const ResultContainer = styled.section<{ top: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .tabmenu { 
    display: flex;
    font-size: 18px;
    margin-bottom: 30px;
    .link {
      text-decoration: none;
    }
  }

  .result {  
    flex: 1;
    height:100%;
    overflow: hidden;
    width: 100%;
    .songlist{
      height: 100%;
      margin: 0;
    }
  }
  .songlist{
      display: flex;
      flex-wrap: wrap;
      position:relative;
      overflow-y: scroll;
      .wrapper{
          margin: 10px;
          width: 136px;
          
      }
      &::before{
        content:'';
        position: fixed;
        width: 100%;
        height: 12px;
        background: ${p => p.top ? "linear-gradient(180deg,#111215b3,#1a1b2100)" : null};
    }
  }

`;


export const HotContainer = styled.div`
  position: relative;
  padding: 7px;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.bgc.secondary};
  margin: 7px;
  width: fit-content;
  border-radius: 4px;
  width: fit-content;
  height: 45px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #202026;
  }
  .main {
    font-size: 18px;
    color: #acacae;
    margin-bottom: 7px;
  }
  .secon {
    font-size: 14px;
    color: #5d5d60;
    user-select: none;
  }
  img {
    position: absolute;
    width: 27px;
    top: -7px;
    right: -6px;
  }
`;
