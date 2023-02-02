import React, { FC, useState } from "react";
import { CellHeadingProps } from "../../table/CellHeading/CellHeading";
import { RowProps } from "../../table/Row/Row";
import Table from "../../table/Table/Table";
import ExpandingPanel from "../ExpandingPanel/ExpandingPanel";
import "./ExpandingTable.scss";

export interface ExpandingTableProps {
  title: string;
  headings: CellHeadingProps[];
  arrayRows: RowProps[];
  onClickExpanding: () => void;
}

const ExpandingTable: FC<ExpandingTableProps> = ({ title, headings, arrayRows, onClickExpanding }) => {
  const [isVisible, setVisible] = useState(false);

  const expanderHandler = () => {
    setVisible((prev) => !prev);
    onClickExpanding();
  };

  return (
    <div className="expanding">
      <ExpandingPanel isContentVisible={isVisible} title={title} onClickExpanding={expanderHandler} />

      {/* <transition name="expanding__content">
      </transition> */}
      {isVisible && (
        <div className="expanding__content">
          <Table arrayRows={arrayRows} headings={headings} />
        </div>
      )}
    </div>
  );
};

export default ExpandingTable;
