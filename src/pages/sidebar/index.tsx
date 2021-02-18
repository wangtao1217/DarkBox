import * as React from "react";
import { useContext } from 'react'
import { LogContext } from '../../content/LogContext'
import { Wrapper } from "./styles";

import menu_data, {ItemType} from './menu_data'
import Player from "./player/index";
import Menu from "../../components/menu/index";
import Search from '../../components/menu/index'
import Log from './user_log'

function SideBar() {
  const { state } = useContext(LogContext)
  const { islogged } = state
  const data = menu_data.filter((item: ItemType) => item.log === islogged||item.stick);
  return (
    <Wrapper>
      <Log/>
      <Menu data={data}  />
      <Player />
    </Wrapper>
  );
}
export default SideBar