import React, { FC, useState } from "react";
import Table from "../../Table/Table";
import ExpandingPanel from "../ExpandingPanel/ExpandingPanel";
import "./ExpandingTable.scss";

export interface IExpandingTable {
  tableName: string;
  headings: string[];
  arrayRows: string[][];
}

export interface ExpandingTableProps {
  oneExpandingTable: IExpandingTable;
  //  oneExpandingTable - одна расширяющаяся таблица
}

const ExpandingTable: FC<ExpandingTableProps> = ({ oneExpandingTable }) => {
  const [isVisible, setVisible] = useState(false);

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="expanding">
      <ExpandingPanel
        isContentVisible={isVisible}
        panelName={oneExpandingTable.tableName}
        onClickExpanding={expanderHandler}
      />

      {isVisible && (
        <div className={isVisible ? "expanding__content-enter-active" : "expanding__content-leave-active"}>
          <Table headings={oneExpandingTable.headings} arrayRows={oneExpandingTable.arrayRows} />
        </div>
      )}
    </div>
  );
};

export default ExpandingTable;
