import React, { FC } from "react";
import "./TH.scss";

export interface THProps {
  head: string;
}

const TH: FC<THProps> = ({ head }) => {
  return <th>{head}</th>;
};

export default TH;
