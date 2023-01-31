import React, { FC, useRef, useEffect } from "react";
import Controller from "../../../ui/select/Controller/Controller";
import Graph from "../Graph/Graph";
import Percents, { PercentProps } from "../Percents/Percents";
import styles from "./PortfolioStructure.module.scss";

interface PortfolioStructureProps {
  // isSelectionBlockVisible:boolean;
  ifPressed: boolean;
  controllerValue: string;
  idOptions: number;
  onClickController: () => void;
  emitCoords: (top: number, bottom: number, left: number, width: number, height: number) => void;
}

const PortfolioStructure: FC<PortfolioStructureProps> = ({
  ifPressed,
  controllerValue,
  idOptions,
  onClickController,
  emitCoords,
}) => {
  let top = 0;
  let bottom = 0;
  let left = 0;
  let width = 0;
  let height = 0;

  const selectController = useRef<HTMLDivElement>(null);

  const percentsBlocks: PercentProps[] = [
    {
      percent01: "57.6%",
      percent02: "24.7%",
      percent03: "13%",
      percent04: "2.8%",
      percent05: "1.2%",
      percent06: "0.7%",
    },
    {
      percent01: "57.8%",
      percent02: "25.1%",
      percent03: "13.8%",
      percent04: "1.5%",
      percent05: "1.1%",
      percent06: "0.7%",
    },
    {
      percent01: "55.3%",
      percent02: "26.9%",
      percent03: "13.8%",
      percent04: "2.2%",
      percent05: "1.1%",
      percent06: "0.7%",
    },
    {
      percent01: "55.2%",
      percent02: "27.2%",
      percent03: "13.7%",
      percent04: "2.1%",
      percent05: "1.1%",
      percent06: "0.7%",
    },
    {
      percent01: "56.1%",
      percent02: "27.1%",
      percent03: "12.4%",
      percent04: "2.8%",
      percent05: "1%",
      percent06: "0.6%",
    },
    {
      percent01: "56.2%",
      percent02: "28.2%",
      percent03: "12.1%",
      percent04: "1.7%",
      percent05: "1.2%",
      percent06: "0.6%",
    },
    {
      percent01: "56.5%",
      percent02: "28.5%",
      percent03: "12%",
      percent04: "1.3%",
      percent05: "1.1%",
      percent06: "0.6%",
    },
    {
      percent01: "55.4%",
      percent02: "29.7%",
      percent03: "12.2%",
      percent04: "1.1%",
      percent05: "1%",
      percent06: "0.6%",
    },
    {
      percent01: "54.5%",
      percent02: "29.8%",
      percent03: "12.1%",
      percent04: "2%",
      percent05: "1%",
      percent06: "0.6%",
    },
    {
      percent01: "53.9%",
      percent02: "30.4%",
      percent03: "12.1%",
      percent04: "2.1%",
      percent05: "0.9%",
      percent06: "0.6%",
    },
    {
      percent01: "53.1%",
      percent02: "30.7%",
      percent03: "12.6%",
      percent04: "2.1%",
      percent05: "0.9%",
      percent06: "0.6%",
    },
    {
      percent01: "53%",
      percent02: "30.9%",
      percent03: "12.5%",
      percent04: "2.2%",
      percent05: "0.8%",
      percent06: "0.6%",
    },
    {
      percent01: "52%",
      percent02: "31.4%",
      percent03: "12.2%",
      percent04: "3%",
      percent05: "0.8%",
      percent06: "0.6%",
    },
    {
      percent01: "51%",
      percent02: "31%",
      percent03: "12%",
      percent04: "4.8%",
      percent05: "0.6%",
      percent06: "0.6%",
    },
    {
      percent01: "50.1%",
      percent02: "31.2%",
      percent03: "12%",
      percent04: "5.5%",
      percent05: "0.6%",
      percent06: "0.6%",
    },
    {
      percent01: "48.5%",
      percent02: "31.9%",
      percent03: "12%",
      percent04: "6.4%",
      percent05: "0.6%",
      percent06: "0.6%",
    },
    {
      percent01: "48.6%",
      percent02: "32.7%",
      percent03: "11.9%",
      percent04: "5.6%",
      percent05: "0.6%",
      percent06: "0.6%",
    },
    {
      percent01: "49.6%",
      percent02: "32.1%",
      percent03: "11.9%",
      percent04: "5.4%",
      percent05: "0.5%",
      percent06: "0.5%",
    },
    {
      percent01: "49.08%",
      percent02: "31.47%",
      percent03: "10.79%",
      percent04: "7.65%",
      percent05: "0.52%",
      percent06: "0.49%",
    },
    {
      percent01: "49.53%",
      percent02: "30.45%",
      percent03: "9.68%",
      percent04: "9.61%",
      percent05: "0.53%",
      percent06: "0.2%",
    },
    {
      percent01: "50%",
      percent02: "29.62%",
      percent03: "10.35%",
      percent04: "9.27%",
      percent05: "0.53%",
      percent06: "0.23%",
    },
    {
      percent01: "49.69%",
      percent02: "29.46%",
      percent03: "10.06%",
      percent04: "10.02%",
      percent05: "0.51%",
      percent06: "0.26%",
    },
    {
      percent01: "51%",
      percent02: "28.5%",
      percent03: "10.5%",
      percent04: "9.2%",
      percent05: "0.5%",
      percent06: "0.3%",
    },
    {
      percent01: "50.2%",
      percent02: "28.2%",
      percent03: "10.7%",
      percent04: "10.4%",
      percent05: "0.5%",
      percent06: "0%",
    },
    {
      percent01: "50.3%",
      percent02: "27.5%",
      percent03: "11%",
      percent04: "10.7%",
      percent05: "0.5%",
      percent06: "0%",
    },
  ];

  const getSelectControllerCoords = () => {
    if (selectController.current) {
      top = selectController.current.getBoundingClientRect().top;
      bottom = selectController.current.getBoundingClientRect().bottom;
      console.log("top :" + top, "bottom :" + bottom);
    }
  };

  const getSelectControllerSize = () => {
    if (selectController.current) {
      left = selectController.current.getBoundingClientRect().left;
      width = selectController.current.getBoundingClientRect().width;
      height = selectController.current.getBoundingClientRect().height;

      console.log("left :" + left, "width :" + width, "height :" + height);
    }
  };

  useEffect(() => {
    getSelectControllerSize();
  });

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollHandler = (event: any) => {
    getSelectControllerCoords();
    //
    // emitCoords(top, bottom, left, width, height); // Не трогать!!!
    //
    // console.log(event.target.documentElement.scrollHeight); // Не трогать!!!
    // console.log(event.target.documentElement.scrollTop); // Не трогать!!!
    // console.log(window.innerHeight); // Не трогать!!!
    if (
      event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      console.log("Нижний край < 100");
    }
  };

  return (
    <section className={styles["portfolie-structure"]}>
      <h1 className={styles["portfolie-structure__heading"]}>Структура портфеля</h1>

      <div className={styles["portfolie-structure__selection"]} ref={selectController}>
        <Controller ifPressed={ifPressed} value={controllerValue} onClickController={onClickController} />
      </div>

      <div className={styles["portfolie-structure__content"]}>
        <Graph />

        {percentsBlocks.map((block, index) => (
          <Percents
            key={index}
            percent01={block.percent01}
            percent02={block.percent02}
            percent03={block.percent03}
            percent04={block.percent04}
            percent05={block.percent05}
            percent06={block.percent06}
            // isVisible={true}
            isVisible={idOptions === index}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioStructure;
