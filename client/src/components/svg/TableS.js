import React, { useEffect, useState } from "react";
import { Children } from "react";
const TableS = ({
  color,
  id
}) => {
  
  
  return (
    <>
      <svg
        className="table-reserve"
        width="auto"
        height="60%"
        viewBox="0 0 263 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        
      >
        <g id="Group 1" className="table-s">
          <rect
            id="Rectangle 1"
            x="57"
            y="3"
            width="149"
            height="144"
            rx="5"
            fill="white"
            stroke={color}
            stroke-width="6"
          />
          <rect
            id="Rectangle 2"
            x="221"
            y="55"
            width="27"
            height="40"
            rx="4"
            fill="white"
            stroke={color}
            stroke-width="4"
          />
          <ellipse
            id="Ellipse 1"
            cx="250"
            cy="75"
            rx="13"
            ry="25"
            fill={color}
          />
          <rect
            id="Rectangle 3"
            x="42"
            y="95"
            width="27"
            height="40"
            rx="4"
            transform="rotate(180 42 95)"
            fill="white"
            stroke={color}
            stroke-width="4"
          />
          <ellipse
            id="Ellipse 2"
            cx="13"
            cy="75"
            rx="13"
            ry="25"
            transform="rotate(180 13 75)"
            fill={color}
          />
        </g>
        <text
          x="50%"
          y="60%"
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

export default TableS;
