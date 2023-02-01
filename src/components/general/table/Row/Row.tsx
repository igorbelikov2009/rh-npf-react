import React, { FC } from "react";
import Cell, { CellProps } from "../Cell/Cell";
import "./Row.scss";

export interface RowProps {
  cellArray: CellProps[];
}

const Row: FC<RowProps> = ({ cellArray }) => {
  return (
    <tr>
      {cellArray.map((cell, index) => (
        <Cell key={index} title={cell.title} />
      ))}
    </tr>
  );
};

export default Row;
