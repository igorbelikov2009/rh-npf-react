import { motion, AnimatePresence } from "framer-motion"; // анимация
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

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div className={isVisible ? styles["expanding__display-block"] : styles["expanding__display-none"]}>
              <Table headings={oneExpandingTable.headings} arrayRows={oneExpandingTable.arrayRows} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandingTable;
