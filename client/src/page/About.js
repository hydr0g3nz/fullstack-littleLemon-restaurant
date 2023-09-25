import React from "react";
import TableS from "../components/svg/TableS";
import TableL from "../components/svg/TableL";
import TableM from '../components/svg/TableM'
import TableLR from "../components/svg/TableLR";
function About({ className }) {
  const list = ["A", "B", "C", "D", "E", "F", "G", "H"];
  return (
    <>
      {list.map((item) => (
        <TableS
          normalCol={"darkgrey"}
          hoverCol={"yellow"}
          inActiveCol={"darkgrey"}
        >
          {item}
        </TableS>
      ))}

      <TableLR
        normalCol={"#495E57"}
        hoverCol={"yellow"}
        inActiveCol={"darkgrey"}
      >
        TEST
      </TableLR>
      <TableM
        normalCol={"#495E57"}
        hoverCol={"yellow"}
        inActiveCol={"darkgrey"}
      >
        TEST
      </TableM>
    </>
  );
}

export default About;
