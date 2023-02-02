import React, { FC } from "react";
import "./CellHeading.scss";

export interface CellHeadingProps {
  titleCellHeading: string;
}

const CellHeading: FC<CellHeadingProps> = ({ titleCellHeading }) => {
  return <th>{titleCellHeading}</th>;
};

export default CellHeading;
