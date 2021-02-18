
import styled from "styled-components";


export const Container = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  margin: 7px 0;
  position: relative;
  user-select: none;
    .back{
        height: 4px;
        width: 100%;
        margin: 0 10px;
        background-color: rgba(70,70,70,.2);
        max-width: 100%;
        border-radius: 3px;
        .thumb{
            height: 100%;
            max-width: 100%;
            background-color: ${p => p.theme.text.primary};
            position: relative;
            border-radius: 3px;
            span{
                position: absolute;
                right: 0;
                height:20px;
                width:20px;
                background-color:red;
                top:0;
            }
        }
  }
`;

export const Point = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  background-color: #ff4b5c;
  height: 20px;
  width: 20px;
  top: 0px;
  right: -10px;
  border-radius: 10px;
`;
