import React, { FC } from "react";
import "./Cell.scss";

export interface CellProps {
  title: string;
}

const Cell: FC<CellProps> = ({ title }) => {
  return <td>{title}</td>;
};

export default Cell;
