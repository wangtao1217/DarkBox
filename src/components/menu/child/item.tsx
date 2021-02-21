import React, { useContext } from "react";
import { useLocation } from 'react-router-dom';

import { MenuOption } from "../types";
import { Item_wrapper } from "../styles";
import { ActiveContext } from "../";

function Item({ content, index, route }: MenuOption) {
  const { act_num, dispatch } = useContext(ActiveContext);
  const act_route = useLocation().pathname.split('/')[1]
  
  return (
    <Item_wrapper active={route == '/'+act_route} onClick={() => dispatch(index)}>
      <span className="icon">
        <h4>{index}</h4>
      </span>
      <span>{content ? content : "none"}</span>
    </Item_wrapper>
  );
}
Item.defaultProps = { type: "item", title: "null" };

export default Item;
