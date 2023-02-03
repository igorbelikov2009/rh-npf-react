import React, { FC } from "react";
import ExpandingTable, { IExpandingTable } from "../../../general/expanding/ExpandingTable/ExpandingTable";

interface CompositionBlockProps {
  isVisible: boolean;
  arrayOfExpanderTables: IExpandingTable[];
}

const CompositionBlock: FC<CompositionBlockProps> = ({ isVisible, arrayOfExpanderTables }) => {
  return (
    <>
      {isVisible && (
        <div>
          {arrayOfExpanderTables.map((expander, index) => (
            <ExpandingTable key={index} oneExpandingTable={expander} />
          ))}
        </div>
      )}
    </>
  );
};

export default CompositionBlock;
