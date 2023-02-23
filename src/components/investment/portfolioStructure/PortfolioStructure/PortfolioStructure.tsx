import React, { FC, useRef, useEffect, useState } from "react";
import { investPercentsAPI } from "../../../../services/investPercentsAPI";
import Controller from "../../../ui/select/Controller/Controller";
import Graph from "../Graph/Graph";
import Percents from "../Percents/Percents";
import styles from "./PortfolioStructure.module.scss";

interface PortfolioStructureProps {
  ifPressed: boolean;
  controllerValue: string;
  idOption: string;
  onClickController: () => void;
  emitCoords: (top: number, bottom: number, left: number, width: number) => void;
  emitControllerBottomLeft: (bottom: number, left: number) => void;
}

const PortfolioStructure: FC<PortfolioStructureProps> = ({
  ifPressed,
  controllerValue,
  idOption,
  onClickController,
  emitCoords,
  emitControllerBottomLeft,
}) => {
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  const selectController = useRef<HTMLDivElement>(null);

  // Получаем данные с сервера
  const { data: investPercents } = investPercentsAPI.useGetInvestPercentsQuery();

  const getSelectControllerCoords = () => {
    if (selectController.current) {
      setTop(selectController.current.getBoundingClientRect().top);
      setBottom(selectController.current.getBoundingClientRect().bottom);
      setLeft(selectController.current.getBoundingClientRect().left);
      setWidth(selectController.current.getBoundingClientRect().width);

      emitCoords(top, bottom, left, width);
    }
  };

  useEffect(() => {
    if (selectController.current) {
      setBottom(selectController.current.getBoundingClientRect().bottom);
      setLeft(selectController.current.getBoundingClientRect().left);
      emitControllerBottomLeft(bottom, left);
    }
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [top]);

  const scrollHandler = (event: any) => {
    getSelectControllerCoords();
  };

  return (
    <section className={styles["portfolie-structure"]}>
      <h1 className={styles["portfolie-structure__heading"]}>Структура портфеля</h1>

      <div className={styles["portfolie-structure__selection"]} ref={selectController}>
        <Controller ifPressed={ifPressed} value={controllerValue} onClickController={onClickController} />
      </div>

      <div className={styles["portfolie-structure__content"]}>
        <Graph />

        {investPercents &&
          investPercents.map((block, index) => (
            <Percents
              key={index}
              percent01={block.percent01}
              percent02={block.percent02}
              percent03={block.percent03}
              percent04={block.percent04}
              percent05={block.percent05}
              percent06={block.percent06}
              isVisible={Number(idOption) === index}
            />
          ))}
      </div>
    </section>
  );
};

export default PortfolioStructure;
