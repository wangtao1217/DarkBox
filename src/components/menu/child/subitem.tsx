import * as React from "react";

import { MenuOption } from "../types";

function Subitem({ children }: MenuOption) {
  return <div></div>;
}
Subitem.defaultProps = { type: "subitem", title: "null" };

export default Subitem;
