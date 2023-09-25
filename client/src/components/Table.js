import React, { useEffect, useState } from "react";
import TableS from "./svg/TableS";
import TableM from "./svg/TableM";
import TableLR from "./svg/TableLR";
const Table = ({
  normalCol,
  hoverCol,
  tableSelected,
  setTableSelected,
  inActiveCol,
  children,
  className,
  id,
  tableList,
}) => {
  const [color, setColor] = useState(normalCol);
  useEffect(() => {
    if (tableSelected === id) {
      setColor(hoverCol);
    } else if (tableList.includes(id)) setColor(inActiveCol);
    else setColor(normalCol);
  }, [tableSelected]);
  useEffect(() => {
    if (tableList.includes(id)) setColor(inActiveCol);
  }, [tableList]);
  return (
    <div
      className={className}
      onMouseOver={() => {
        if (!tableList.includes(id)) setColor(hoverCol);
      }}
      onMouseLeave={() =>
        tableSelected === id
          ? null
          : !tableList.includes(id)
          ? setColor(normalCol)
          : null
      }
      onClick={() => {
        if (!tableList.includes(id))
          if (tableSelected === id) setTableSelected("");
          else setTableSelected(id);
      }}
    >
      {id[0] === "S" && <TableS color={color} id={id}></TableS>}
      {id[0] === "M" && <TableM color={color} id={id}></TableM>}
      {id[0] === "L" && <TableLR color={color} id={id}></TableLR>}
    </div>
  );
};

export default Table;
