import React, { FC } from "react";
import HeadCell, { HeadCellProps } from "../HeadCell/HeadCell";
import "./RowHeadings.scss";

export interface RowHeadingsProps {
  headings: HeadCellProps[];
}

const RowHeadings: FC<RowHeadingsProps> = ({ headings }) => {
  return (
    <tr>
      {headings.map((head, index) => (
        <HeadCell key={index} titleHeadCell={head.titleHeadCell} />
      ))}
    </tr>
  );
};

export default RowHeadings;
