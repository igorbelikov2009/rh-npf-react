import React, { FC } from "react";
import "./TD.scss";

export interface TDProps {
  title: string;
}

const TD: FC<TDProps> = ({ title }) => {
  return <td></td>;
};

export default TD;
