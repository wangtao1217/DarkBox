import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { Element } from "react-use/lib/useSize";

import { MenuOption } from "./types";
import Item from "./child/item";
import { Container } from "./styles";

export const ActiveContext = React.createContext({
  act_num: 0,
  dispatch: null,
});

function Menu({ data }) {
  const [act_num, dispatch] = useState(0);

  const creator = (data: Array<MenuOption>) => {
    if (!data) return null;
    return data.map((item, index) => {
      let { type, content, route, key } = item;

      if (type === "item" || type === null) {
        return (
          <Link className="link" to={route}>
            <Item  content={content} index={index} key={key} route={route} />
          </Link>
        );
      } else {
        const { children } = item;
      }
    });
  };
  return (
    <ActiveContext.Provider value={{ act_num, dispatch }}>
      <Container>{creator(data)}</Container>
    </ActiveContext.Provider>
  );
}

export default Menu;
