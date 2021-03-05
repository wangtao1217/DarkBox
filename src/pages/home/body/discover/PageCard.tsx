import React from 'react'
import Card from "../../../../components/card";
import {AlbumnType} from '../index'
import { Section } from "./style"

type PageCardProps = {
    albumns: Array<AlbumnType>
}
const PageCard = ({albumns}:PageCardProps) => {
    return (
        <Section>
          <span className="title">{"推荐歌单"}</span>
          <span className="line">
            {albumns.map((i) => {
              const {
                name,
                id,
                picUrl,
                playCount,
                trackNumberUpdateTime,
                trackCount,
              } = i;
              return ( 
                <div className="item">
                  <Card text={name} coverImgUrl={picUrl} id={id} />
                </div>
              );
            })}
          </span>
        </Section>
    )
}

export default PageCard
