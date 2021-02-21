import React from "react";
import { Link } from "react-router-dom";
import { Top_Container, Span } from "./styles";
import Form from "../../../components/form";
import { useLocation, useRouteMatch } from "react-router-dom";

export type ItemType = {
  type?: "item" | "subitem";
  title: string;
  route?: string;
}[];

const menu_content: ItemType = [
  {
    type: "item",
    title: "发现",
  },
  {
    type: "item",
    title: "歌单",
    route: "album",
  },
];

export const TabMenu = ({ items }) => {
  const { pathname } = useLocation();
  const { path } = useRouteMatch();
  const route_list = pathname.split("/");
  return (
    <span style={{ display: "flex" }}>
      {items?.map(({ route, title }) => {
        return (
          <Span
            key={route}
            active={
              route
                ? route === route_list[route_list.length - 1]
                : path.split("/")[path.split("/").length - 1] ===
                  route_list[route_list.length - 1]
            }
          >
            <Link className="link" to={route ? `${path}/${route}` : `${path}`}>
              {title}
            </Link>
          </Span>
        );
      })}
    </span>
  );
};

function Top() {
  return (
    <Top_Container>
      <Form></Form>
      <section>
        <TabMenu items={menu_content} />
      </section>
    </Top_Container>
  );
}

export default Top;
