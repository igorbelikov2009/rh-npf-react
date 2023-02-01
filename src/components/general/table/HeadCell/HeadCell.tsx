import React, { FC } from "react";
import "./HeadCell.scss";

export interface HeadCellProps {
  titleHeadCell: string;
}

const HeadCell: FC<HeadCellProps> = ({ titleHeadCell }) => {
  return <th>{titleHeadCell}</th>;
};

export default HeadCell;
