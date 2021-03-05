import styled from "styled-components";

const Wrapper = styled.div<{ onClick }>`
  cursor: pointer;
  height: 100%;
  width: 100%;
  color: rgb(242, 242, 242);
  background-color: ${(p) => p.theme.bgc.secondary};
  padding: 7px 7px 12px 7px;
  border-radius: 2px;
  transition: 0.2s;
  box-sizing: border-box;
  &:hover {
    background-color: #1e1f25;
    /* border: 2px solid rgba(50,50,50,.7); */
  } 
  div {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    margin-bottom: 12px;
    border-radius: 2px;
    img {
      display: inline-block;
      max-width: 100%;
      background-color: ${(p) => p.theme.bgc.primary};
      margin-bottom: 10px;
      overflow: hidden;
    }
  }
  span {
    height: auto;
    width: 100%;
    color: #f2f2f2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    padding: 0 2px 0 2px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    box-sizing: border-box;
  }
`;

export { Wrapper };
