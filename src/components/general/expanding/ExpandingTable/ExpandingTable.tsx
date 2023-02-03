import React, { FC, useState } from "react";
import Table from "../../table/Table/Table";
import ExpandingPanel from "../ExpandingPanel/ExpandingPanel";
import "./ExpandingTable.scss";

export interface IExpandingTable {
  tableName: string;
  headings: string[];
  arrayRows: string[][];
}

export interface ExpandingTableProps {
  // title: string;
  // headings: HeadProps[];
  // arrTitleArr: TRProps[];
  expandingTable: IExpandingTable;
  onClickExpanding: () => void;
}

const ExpandingTable: FC<ExpandingTableProps> = ({ expandingTable, onClickExpanding }) => {
  const [isVisible, setVisible] = useState(true);

  const expanderHandler = () => {
    setVisible((prev) => !prev);
    onClickExpanding();
  };

  return (
    <div className="expanding">
      <ExpandingPanel
        isContentVisible={isVisible}
        tableName={expandingTable.tableName}
        onClickExpanding={expanderHandler}
      />

      {/* <transition name="expanding__content">
      </transition> */}
      {/* {isVisible && ( )} */}
      <div className="expanding__content">
        <Table headings={expandingTable.headings} arrayRows={expandingTable.arrayRows} />
      </div>
    </div>
  );
};

export default ExpandingTable;
