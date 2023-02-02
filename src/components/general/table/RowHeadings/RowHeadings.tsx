import React, { FC } from "react";
import CellHeading, { CellHeadingProps } from "../CellHeading/CellHeading";
import "./RowHeadings.scss";

export interface RowHeadingsProps {
  headings: CellHeadingProps[];
}

const RowHeadings: FC<RowHeadingsProps> = ({ headings }) => {
  return (
    <tr>
      {headings.map((head, index) => (
        <CellHeading key={index} titleCellHeading={head.titleCellHeading} />
      ))}
    </tr>
  );
};

export default RowHeadings;
