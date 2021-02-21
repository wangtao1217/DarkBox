import React from "react";
import styled, { css } from "styled-components";
import { _flex, _before } from "../../utils/mixin";

const Wrapper = styled.div`
  cursor: pointer;
  user-select: none;
  padding: 7px 14px;
  ${_flex({})}
  transition: .1s;
  background-color:  #e6e6f6;
  border-radius: 1px;
  color: #52556c;
  transform: translateY(${({down})=>down?2:0}px);
  ${({down})=>down?"box-shadow: 0 3px 6px rgb(120 120 122 / 20%) inset;":null}
  &::after {
    content: 0;
    position: fixed;
    width: 100px;
    height: 100px;
    top: 0;
    left: 0;
    background-color: red;
    z-index: 400;
  }
`;

const Button = (props) => {
  const { children } = props;
  const [down, setDown] = React.useState(false);
  return (
    <Wrapper
      down={down}
      {...props}
      className="button"
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
