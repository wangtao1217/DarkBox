import React from 'react'
import Card from '../../../../components/card'


const Discover = ({albumns}) => {
    return (
        <>
      <section className="container">
      <section className="banner"> </section>
    
      <section>
        <div className="wrapper">
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
                <Card name={name} coverImgUrl={picUrl} id={id} />
              </div>
            );
          })}
        </div>
      </section>
    </section></>
    )
}

export default Discover
