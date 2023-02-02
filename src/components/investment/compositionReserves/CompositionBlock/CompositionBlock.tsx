import React, { FC } from "react";
import ExpandingTable from "../../../general/expanding/ExpandingTable/ExpandingTable";
import { CellHeadingProps } from "../../../general/table/CellHeading/CellHeading";
import { RowProps } from "../../../general/table/Row/Row";

export interface IExpandingTables {
  title: string;
  headings: CellHeadingProps[];
  arrayRows: RowProps[];
}

interface CompositionBlockProps {
  isVisible: boolean;
  expandingTables: IExpandingTables[];
  onClickExpanding: () => void;
}

const CompositionBlock: FC<CompositionBlockProps> = ({ isVisible, expandingTables, onClickExpanding }) => {
  return (
    <>
      {isVisible && (
        <div>
          {expandingTables.map((table, index) => (
            <ExpandingTable
              key={index}
              arrayRows={table.arrayRows}
              headings={table.headings}
              title={table.title}
              onClickExpanding={onClickExpanding}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CompositionBlock;
