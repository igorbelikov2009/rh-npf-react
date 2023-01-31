import React, { FC } from "react";
import Paragraph, { ParagraphProps } from "./Paragraph/Paragraph";

interface ParagraphsArrProps {
  paragraphsArray: ParagraphProps[];
}

const ParagraphsArr: FC<ParagraphsArrProps> = ({ paragraphsArray }) => {
  return (
    <>
      {paragraphsArray.map((par, index) => (
        <Paragraph key={index} text={par.text} />
      ))}
    </>
  );
};

export default ParagraphsArr;
