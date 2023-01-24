import React, { FC } from "react";
import "../../styles/TopBlock.scss";

interface TopBlockProps {
  heading: string;
  headingSpan?: string;
  subheading?: string;
  subheadingSpan?: string;
  image: string;
}

const TopBlock: FC<TopBlockProps> = ({ heading, headingSpan, subheading, subheadingSpan, image }) => {
  return (
    <section className="top-block" style={{ backgroundImage: `url(${image})` }}>
      <div className="top-block__container">
        <h1 className="top-block__heading">
          {heading}
          <span className="top-block__heading_span"> {headingSpan} </span>
        </h1>
        <h2 className="top-block__subheading">
          {subheading}
          <span className="top-block__subheading_span">{subheadingSpan}</span>
        </h2>
      </div>
    </section>
  );
};

export default TopBlock;
