import * as React from "react";
import { useContext } from 'react'
import { LogContext } from '../../content/LogContext'
import { Wrapper } from "./styles";

import Menu from "../../components/menu/index";
import Log from './user_log'

import {
  faMusic,
  faHeart,
  faSearch,
  faPauseCircle,
  faStepForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type ItemType = {
  type: "item" | "subItem",
  content: string
  route: string
  log?: boolean | string
  stick?: boolean
  key?: number
  icon?: any
}


const menu_data: Array<ItemType> = [
  {
      type: "item",
      content: "主页",
      route: "/home", 
      stick: true,
      key: 0,
      icon: <FontAwesomeIcon icon={faMusic}/>,
  },{
      type: "item",     
      content: "搜索",
      route: "/search",
      stick: true,
      key: 1,
      icon:  <FontAwesomeIcon icon={faSearch}/>
  },
  {
      type: "item",
      content: "喜欢的音乐",
      route: `/detail:`,
      log: true,
      key: 2,
      icon:  <FontAwesomeIcon icon={faHeart}/>

  },
  {
      type: "item",
      content: "我的歌单",
      route: "/created",
      log: true,
      key: 3,
      icon:  <FontAwesomeIcon icon={faMusic}/>

  },
  {
      type: "item",
      content: "收藏歌单`",
      route: "/subscribed",
      log: true,
      key: 4,
      icon:  <FontAwesomeIcon icon={faMusic}/>

  },
];


function SideBar() { 
  const { state } = useContext(LogContext)
  const { islogged } = state
  const data = menu_data.filter((item: ItemType) => item.log === islogged||item.stick);
  return (
    <Wrapper>
      <Log/>
      <Menu data={data}  />
    </Wrapper>
  ); 
}
export default SideBar