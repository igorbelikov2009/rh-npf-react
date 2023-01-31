import React, { FC } from "react";
import { ParagraphProps } from "./Paragraph/Paragraph";
import ParagraphBefore from "./ParagraphBefore/ParagraphBefore";

export interface ParagraphBeforeArrProps {
  paragraphsBeforeArray: ParagraphProps[];
  // text: string;
}

const ParagraphBeforeArr: FC<ParagraphBeforeArrProps> = ({ paragraphsBeforeArray }) => {
  return (
    <>
      {paragraphsBeforeArray.map((par, index) => (
        <ParagraphBefore key={index} text={par.text} />
      ))}
    </>
  );
};

export default ParagraphBeforeArr;
