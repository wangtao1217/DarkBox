import * as React from "react";
import { Element } from "react-use/lib/useSize";

import { Table_container, Cell } from "./styles";
import usePlay from "../../../hooks/usePlay";

export type DataSource = any;

export type Columns = {
  title: string;
  key: string | number;
  dataIndex: string; //索引行
  render?: (item?: any) => Element;
}[];

export type TableType = {
  dataSource?: any;
  columns?: Columns;
  class?: string;
  onDoubleClick?: React.ReactEventHandler;
  width?: Array<string>;
  hidehead?: boolean;
  data?: Array<any>;
};

const Table = ({
  dataSource,
  columns,
  width,
  hidehead,
}: TableType) => {
  const [music, onPlay] = usePlay();
  return (
    <Table_container>
      {hidehead ? null : (
        <section className="head">
          {columns.map((val, i) => {
            const { title, key } = val;
            return (
              <Cell key={key} width={width[i]}>
                {title}
              </Cell>
            );
          })}
        </section>
      )}
      <section className="body">
        {dataSource?.map((item, key) => {
          return (
            <section className="row" key={key} onClick={() => onPlay({
              musicId: item.id,
              playlist: dataSource
            })}>
              {columns.map((cell, i) => {
                const { dataIndex, render } = cell;
                return (
                  <Cell key={cell.key} width={width[i]}>
                    {render ? render(item) : item[dataIndex]}
                  </Cell>
                );
              })}
            </section>
          );
        })}
      </section>
    </Table_container>
  );
}

export default Table;
