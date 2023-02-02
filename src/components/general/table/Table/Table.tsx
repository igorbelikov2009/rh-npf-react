import React, { FC } from "react";
import { CellHeadingProps } from "../CellHeading/CellHeading";
import Row, { RowProps } from "../Row/Row";
import RowHeadings from "../RowHeadings/RowHeadings";
import style from "./Table.module.scss";

export interface TableProps {
  headings: CellHeadingProps[];
  arrayRows: RowProps[];
}

const Table: FC<TableProps> = ({ headings, arrayRows }) => {
  return (
    <div className={style.table}>
      <div className={style.table__scrolling}>
        <table>
          <RowHeadings headings={headings} />

          {arrayRows.map((row, index) => (
            <Row key={index} cellArray={row.cellArray} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Table;
