import React from 'react'
import {
    Switch,
    useHistory,
    useRouteMatch,
    Route,
    Link,
  } from "react-router-dom";
import { HotContainer } from './style';

const Hot = ({hot}) => {
    return (
        <div className='content'>
            {hot.map((i) => {
              const { searchWord, iconUrl, content, score, iconType } = i;
              return (
                <Link to="search/result">
                  <HotContainer>
                    <span className="main">{searchWord}</span>
                    <span className="secon">{content}</span>
                    {iconType === 1 ? <img src={iconUrl} /> : null}
                  </HotContainer>
                </Link>
              );
            })}
        </div>
    )
}

export default Hot
