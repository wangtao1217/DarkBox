import styled from "styled-components";

const Container = styled.div<{ occupy: boolean }>`
  width: 100%;
  height: auto;
  background-color: ${(p) => p.theme.bgc.secondary};
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  border-radius: 4px;
  transition: 0.3s;
  transform: translateX(${(p) => (p.occupy ? 0 : -250)}px);
  /* &:hover {
    box-shadow: rgba(3, 3, 3, 0.2) 0px 0px 12px 2px;
  } */
  .infor {
    width: 100%;
    height: auto;
    display: flex;
    margin-bottom: 7px;
  }
  .infor-img {
    overflow: hidden;
    width: 68px;
    height: 0;
    background-color: ${(p) => p.theme.bgc.primary};
    padding-bottom: 70px;
    img {
      width: 100%;
    }
  }
  .text {
    display: flex;
    width: 110px;
    flex-direction: column;
  }
  .text .name {
    /*   flex:; */
    margin-bottom: 5px;
    width: 100px;
    color: ${(p) => p.theme.text.primary};
    /* text-overflow: ellipsis; */
    /* transform: translateX(20px); */
  }
  .text span {
    display: flex;
    white-space: nowrap;
    overflow: hidden;

    /*   background-color: red; */
    margin: 1px;
    margin-left: 10px;
    box-sizing: border-box;
    padding: 2px 0;
    font-size: 14px;
  }
  .time-bar {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    margin-bottom: 14px;
    span {
      font-size: 12px;
    }
  }
  .operation {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    i {
      transform: scale(${({down})=>down?0.9:1});
      cursor: pointer;
      height: 40px;
      width: 32px;
      background-color: #f2f2f2;
    }
  }
`;

export { Container };
