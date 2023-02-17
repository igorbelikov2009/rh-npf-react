import React, { FC } from "react";
import FundCarouselColumn from "../FundCarouselColumn/FundCarouselColumn";
import styles from "./FundCarousel.module.scss";

export interface IColumn {
  title: string;
  description: string;
}

interface FundCarouselProps {
  qq: number;
  jj: number;
  columns: IColumn[];
  emitWidthColumn: (value: number) => void;
}

const FundCarousel: FC<FundCarouselProps> = ({ jj, qq, columns, emitWidthColumn }) => {
  const getWidthColumn = (widthColumn: number) => {
    emitWidthColumn(widthColumn);
  };

  return (
    <div className={styles["fund-carousel"]}>
      {columns.map((column, index) => (
        <FundCarouselColumn
          key={index}
          description={column.description}
          title={column.title}
          isClear={index === qq || jj === index}
          emitWidthColumn={getWidthColumn}
        />
      ))}
    </div>
  );
};

export default FundCarousel;
