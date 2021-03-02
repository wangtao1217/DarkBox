import * as React from "react";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { JsxChild, Node } from "typescript";

import { Range as React_range, getTrackBackground } from "react-range";
import { Container } from "./styles";

type Range = {
  value: number;
  min: number;
  max: number;
  seek?: number | string;
  children?: any;
  setValue: Function;
};

export default ({ value, min, max, children, setValue }: Range) => {
  const range_props = {
    values: [value],
    min,
    max,
    step: 0.1,
    onChange: (values) => setValue(values[0]),
  };

  return (
    <>
      <Container>
        <React_range
          {...range_props}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "3px",
                  width: "100%",
                  background: getTrackBackground({
                    values: [value],
                    colors: ["#1b6cf6", "rgba(70,70,70,.2)"],
                    min,
                    max,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => <div {...props}></div>}
        />
      </Container>
    </>
  );
};
