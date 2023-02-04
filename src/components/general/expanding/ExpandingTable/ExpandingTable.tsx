import React, { FC, useState } from "react";
import Table from "../../Table/Table";
import ExpandingPanel from "../ExpandingPanel/ExpandingPanel";
import styles from "./ExpandingTable.module.scss";

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
    <div className={styles["expanding"]}>
      <ExpandingPanel
        isContentVisible={isVisible}
        panelName={oneExpandingTable.tableName}
        onClickExpanding={expanderHandler}
      />

      {isVisible && (
        <div
          className={isVisible ? styles["expanding__content-enter-active"] : styles["expanding__content-leave-active"]}
        >
          <Table headings={oneExpandingTable.headings} arrayRows={oneExpandingTable.arrayRows} />
        </div>
      )}
    </div>
  );
};

export default ExpandingTable;
