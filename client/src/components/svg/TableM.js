import React, { useState, useEffect } from "react";
import { Children } from "react";
const TableL = ({
  color,
  id
}) => {
  
  
  return (
    <>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 240 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="table-reserve"
        
      >
        <g id="Frame 2">
          <g id="Group 8">
            <rect
              id="Rectangle 1"
              x="3"
              y="53"
              width="234"
              height="144"
              rx="5"
              fill="white"
              stroke={color}
              stroke-width="6"
            />
            <rect
              id="Rectangle 3"
              x="83"
              y="208"
              width="27"
              height="40"
              rx="4"
              transform="rotate(90 83 208)"
              fill="white"
              stroke={color}
              stroke-width="4"
            />
            <rect
              id="Rectangle 3_2"
              x="192"
              y="208"
              width="27"
              height="40"
              rx="4"
              transform="rotate(90 192 208)"
              fill="white"
              stroke={color}
              stroke-width="4"
            />
            <rect
              id="Rectangle 3_3"
              x="46"
              y="42"
              width="27"
              height="40"
              rx="4"
              transform="rotate(-90 46 42)"
              fill="white"
              stroke={color}
              stroke-width="4"
            />
            <rect
              id="Rectangle 3_4"
              x="155"
              y="42"
              width="27"
              height="40"
              rx="4"
              transform="rotate(-90 155 42)"
              fill="white"
              stroke={color}
              stroke-width="4"
            />
          </g>
          <g id="Group 7">
            <ellipse
              id="Ellipse 2"
              cx="66"
              cy="13"
              rx="13"
              ry="25"
              transform="rotate(-90 66 13)"
              fill={color}
            />
            <ellipse
              id="Ellipse 2_2"
              cx="63"
              cy="237"
              rx="13"
              ry="25"
              transform="rotate(90 63 237)"
              fill={color}
            />
            <ellipse
              id="Ellipse 2_3"
              cx="172"
              cy="237"
              rx="13"
              ry="25"
              transform="rotate(90 172 237)"
              fill={color}
            />
            <ellipse
              id="Ellipse 2_4"
              cx="175"
              cy="13"
              rx="13"
              ry="25"
              transform="rotate(-90 175 13)"
              fill={color}
            />
          </g>
        </g>
        <text
          x="50%"
          y="55%"
          style={{ fontSize: "3rem" }}
          fill={color}
          textAnchor="middle"
        >
          {id}
        </text>
      </svg>
    </>
  );
};

export default TableL;
