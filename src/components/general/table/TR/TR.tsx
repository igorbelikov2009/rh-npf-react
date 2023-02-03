import React, { FC } from "react";
import TD, { TDProps } from "../TD/TD";
import "./TR.scss";

export interface TRProps {
  row: TDProps[];
}

const TR: FC<TRProps> = ({ row }) => {
  return (
    <tr>
      {row.map((td, index) => (
        <TD key={index} title={td.title} />
      ))}
    </tr>
  );
};

export default TR;
