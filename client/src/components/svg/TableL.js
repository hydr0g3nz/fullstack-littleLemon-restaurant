import React, { useState } from "react";
import { Children } from "react";
const TableL = ({ Color,id}) => {
  const [color, setColor] = useState(Color);

  return (
    <div >
      <svg
      className="table-reserve"
      width="100%"
      height="254"
      viewBox="0 0 420 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     
    >
      <g id="Frame 3">
        <g id="Group 6">
          <rect
            id="Rectangle 1"
            x="53"
            y="55"
            width="314"
            height="144"
            rx="5"
            fill="white"
            stroke={color}
            stroke-width="6"
          />
          <rect
            id="Rectangle 3"
            x="193"
            s
            y="42"
            width="27"
            height="40"
            rx="4"
            transform="rotate(-90 193 42)"
            fill="white"
            stroke={color}
            stroke-width="4"
          />
          <rect
            id="Rectangle 3_2"
            x="90"
            y="42"
            width="27"
            height="40"
            rx="4"
            transform="rotate(-90 90 42)"
            fill="white"
            stroke={color}
            stroke-width="4"
          />
          <rect
            id="Rectangle 3_3"
            x="296"
            y="42"
            width="27"
            height="40"
            rx="4"
            transform="rotate(-90 296 42)"
            fill="white"
            stroke={color}
            stroke-width="4"
          />
          <rect
            id="Rectangle 3_4"
            x="230"
            y="212"
            width="27"
            height="40"
            rx="4"
            transform="rotate(90 230 212)"
            fill="white"
            stroke={color}
            stroke-width="4"
          />
          <rect
            id="Rectangle 3_5"
            x="127"
            y="212"
            width="27"
            height="40"
            rx="4"
            transform="rotate(90 127 212)"
            fill="white"
            stroke={color}
            stroke-width="4"
          />
          <rect
            id="Rectangle 3_6"
            x="333"
            y="212"
            width="27"
            height="40"
            rx="4"
            transform="rotate(90 333 212)"
            fill="white"
            stroke={color}
            stroke-width="4"
          />
          <rect
            id="Rectangle 3_7"
            x="378"
            y="107"
            width="27"
            height="40"
            rx="4"
            fill="white"
            stroke={color}
            stroke-width="4"
          />
          <rect
            id="Rectangle 3_8"
            x="42"
            y="147"
            width="27"
            height="40"
            rx="4"
            transform="rotate(-180 42 147)"
            fill="white"
            stroke={color}
            stroke-width="4"
          />
        </g>
        <g id="Group">
          <ellipse
            id="Ellipse 2"
            cx="213"
            cy="13"
            rx="13"
            ry="25"
            transform="rotate(-90 213 13)"
            fill={color}
          />
          <ellipse
            id="Ellipse 2_2"
            cx="110"
            cy="13"
            rx="13"
            ry="25"
            transform="rotate(-90 110 13)"
            fill={color}
          />
          <ellipse
            id="Ellipse 2_3"
            cx="316"
            cy="13"
            rx="13"
            ry="25"
            transform="rotate(-90 316 13)"
            fill={color}
          />
          <ellipse
            id="Ellipse 2_4"
            cx="210"
            cy="241"
            rx="13"
            ry="25"
            transform="rotate(90 210 241)"
            fill={color}
          />
          <ellipse
            id="Ellipse 2_5"
            cx="107"
            cy="241"
            rx="13"
            ry="25"
            transform="rotate(90 107 241)"
            fill={color}
          />
          <ellipse
            id="Ellipse 2_6"
            cx="313"
            cy="241"
            rx="13"
            ry="25"
            transform="rotate(90 313 241)"
            fill={color}
          />
          <ellipse
            id="Ellipse 2_7"
            cx="407"
            cy="127"
            rx="13"
            ry="25"
            fill={color}
          />
          <ellipse
            id="Ellipse 2_8"
            cx="13"
            cy="127"
            rx="13"
            ry="25"
            transform="rotate(-180 13 127)"
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
    </div>
  );
};

export default TableL;
