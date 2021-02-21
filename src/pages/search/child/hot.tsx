import React from "react";
import { Link } from "react-router-dom";
import { HotContainer } from "./style";

const Hot = ({ hot, search, input_ref }) => {
  return (
    <div className="content">
      {hot.map((i, index) => {
        const { searchWord, iconUrl, content, score, iconType } = i;
        return (
          <HotContainer
            key={index}
            onClick={() => {
              input_ref.current.value = searchWord;
              search(input_ref.current, true);
            }}
          >
            <Link to="search/result">
              <span className="main">{searchWord}</span>
            </Link>
            <span className="secon">{content}</span>
            {iconType === 1 ? <img src={iconUrl} /> : null}
          </HotContainer>
        );
      })}
    </div>
  );
};

export default Hot;
