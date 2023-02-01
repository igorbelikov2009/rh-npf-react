import React, { FC, useState, useRef, useEffect } from "react";
import TopBlock from "../components/general/TopBlock";
import investImage from "../assets/images/invest/InvestTop.jpg";
import { CardsCardProps } from "../components/general/cards/CardsCard/CardsCard";
import Cards from "../components/general/cards/Cards/Cards";
import InvestmentDescription from "../components/investment/InvestmentDescription/InvestmentDescription";
import InvestmentArchive from "../components/investment/InvestmentArchive/InvestmentArchive";
import PortfolioStructure from "../components/investment/portfolioStructure/PortfolioStructure/PortfolioStructure";
import "../styles/dist/Investment.css";
import OptionsBlock, { IOptionItem } from "../components/ui/select/OptionsBlock/OptionsBlock";

const Investment: FC = () => {
  const [clientHeight, setClientHeight] = useState(0);
  const [firstSelectionValue, setFirstSelectionValue] = useState("30 November 2021 г.");

  // firstSelectController: coords
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [firstControllerTop, setFirstControllerTop] = useState(0);
  const [firstControllerBottom, setFirstControllerBottom] = useState(0);
  const [firstControllerLeft, setFirstControllerLeft] = useState(0);
  const [firstControllerWidth, setFirstControllerWidth] = useState(0);

  // firstSelectionBlock firstBlock
  const [firstBlockIdOption, setFirstBlockIdOption] = useState("0");
  const [firstBlockHeight, setFirstBlockHeight] = useState(0);
  const [firstBlockTop, setFirstBlockTop] = useState(0);
  const [firstBlockVisible, setFirstBlockVisible] = useState(false);
  // cards
  const cards: CardsCardProps[] = [
    {
      icon: "Money",
      subtitle: "Сохранение и приумножение средств вкладчиков и участников",
    },
    {
      icon: "Separation",
      subtitle: "Диверсификация активов",
    },

    {
      icon: "Magnifier",
      subtitle: "Четкий контроль и прозрачность всех операций",
    },
    {
      icon: "Book",
      subtitle: "Соответствие Российским законодательным требованиям и лучшим мировым практикам",
    },
    {
      icon: "Partner",
      subtitle: "Независимость в выборе партнеров – на основе открытых тендеров",
    },
  ];

  const firstSelectOptions: IOptionItem[] = [
    {
      date: "2021-11-30T09:00:00.000Z",
      value: "2021-11-30T09:00:00.000Z",
      id: "0",
    },
    {
      date: "2021-10-31T09:00:00.000Z",
      value: "2021-10-31T09:00:00.000Z",
      id: "1",
    },
    {
      date: "2021-09-30T09:00:00.000Z",
      value: "2021-09-30T09:00:00.000Z",
      id: "2",
    },
    {
      date: "2021-08-31T09:00:00.000Z",
      value: "2021-08-31T09:00:00.000Z",
      id: "3",
    },
    {
      date: "2021-07-31T09:00:00.000Z",
      value: "2021-07-31T09:00:00.000Z",
      id: "4",
    },
    {
      date: "2021-06-30T09:00:00.000Z",
      value: "2021-06-30T09:00:00.000Z",
      id: "5",
    },
    {
      date: "2021-05-31T09:00:00.000Z",
      value: "2021-05-31T09:00:00.000Z",
      id: "6",
    },
    {
      date: "2021-04-30T09:00:00.000Z",
      value: "2021-04-30T09:00:00.000Z",
      id: "7",
    },
    {
      date: "2021-03-31T09:00:00.000Z",
      value: "2021-03-31T09:00:00.000Z",
      id: "8",
    },
    {
      date: "2021-02-28T09:00:00.000Z",
      value: "2021-02-28T09:00:00.000Z",
      id: "9",
    },
    {
      date: "2021-01-31T09:00:00.000Z",
      value: "2021-01-31T09:00:00.000Z",
      id: "10",
    },
    {
      date: "2020-12-31T09:00:00.000Z",
      value: "2020-12-31T09:00:00.000Z",
      id: "11",
    },
    {
      date: "2020-11-30T09:00:00.000Z",
      value: "2020-11-30T09:00:00.000Z",
      id: "12",
    },
    {
      date: "2020-10-31T09:00:00.000Z",
      value: "2020-10-31T09:00:00.000Z",
      id: "13",
    },
    {
      date: "2020-09-30T09:00:00.000Z",
      value: "2020-09-30T09:00:00.000Z",
      id: "14",
    },
    {
      date: "2020-08-31T09:00:00.000Z",
      value: "2020-08-31T09:00:00.000Z",
      id: "15",
    },
    {
      date: "2020-07-31T09:00:00.000Z",
      value: "2020-07-31T09:00:00.000Z",
      id: "16",
    },
    {
      date: "2020-06-30T09:00:00.000Z",
      value: "2020-06-30T09:00:00.000Z",
      id: "17",
    },
    {
      date: "2020-05-31T09:00:00.000Z",
      value: "2020-05-31T09:00:00.000Z",
      id: "18",
    },
    {
      date: "2020-04-30T09:00:00.000Z",
      value: "2020-04-30T09:00:00.000Z",
      id: "19",
    },
    {
      date: "2020-03-31T09:00:00.000Z",
      value: "2020-03-31T09:00:00.000Z",
      id: "20",
    },
    {
      date: "2020-02-29T09:00:00.000Z",
      value: "2020-02-29T09:00:00.000Z",
      id: "21",
    },
    {
      date: "2020-01-31T09:00:00.000Z",
      value: "2020-01-31T09:00:00.000Z",
      id: "22",
    },
    {
      date: "2019-12-31T09:00:00.000Z",
      value: "2019-12-31T09:00:00.000Z",
      id: "23",
    },
    {
      date: "2019-11-30T09:00:00.000Z",
      value: "2019-11-30T09:00:00.000Z",
      id: "24",
    },
  ];

  const refFirstSelectBlock = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  const scrollHandler = (event: any) => {
    getSelectionBlockHeight();
  };
  // const getControllerBottom = (bottom: React.SetStateAction<number>) => {
  //   setFirstControllerBottom(bottom);
  //   console.log("fig vam");
  // };

  // useEffect(() => {
  //   setFirstBlockTop(firstControllerBottom);
  // }, [firstControllerBottom]);

  const getControllerBottom = () => {
    console.log("fig vam");
  };

  const onClickFirstSelectController = () => {
    setFirstBlockVisible((prev) => !prev);
    console.log("onClickFirstSelectController");
    // this.secondSelectionBlock.isVisible = false;
    // setFirstBlockTop(firstControllerBottom);
  };
  console.log(firstBlockVisible);

  const onClickFirstSelectionBlock = () => {
    setFirstBlockVisible(false);
  };
  const onChangeFirstSelectionBlock = (
    selectionValue: React.SetStateAction<string>,
    idOption: React.SetStateAction<string>
  ) => {
    setFirstSelectionValue(selectionValue);
    setFirstBlockIdOption(idOption);
  };

  const getClientHeight = () => {
    setClientHeight(window.innerHeight);
  };

  const getSelectionBlockHeight = () => {
    if (refFirstSelectBlock.current) {
      setFirstBlockHeight(refFirstSelectBlock.current.getBoundingClientRect().height);
    }
  };
  // console.log(firstBlockHeight);

  const onScrollPortfolioStructure = (
    top: React.SetStateAction<number>,
    bottom: React.SetStateAction<number>,
    left: React.SetStateAction<number>,
    width: React.SetStateAction<number>
  ) => {
    getFirstSelectionBlockCoordsTop();
    setFirstControllerTop(top);
    setFirstControllerBottom(bottom);
    setFirstControllerLeft(left);
    setFirstControllerWidth(width);
    getClientHeight();
  };

  const getFirstSelectionBlockCoordsTop = () => {
    setFirstBlockTop(firstControllerBottom);
    if (firstControllerBottom <= 0) {
      setFirstBlockTop(0);
    } else if (firstControllerBottom >= clientHeight - firstBlockHeight && firstControllerBottom <= clientHeight) {
      setFirstBlockTop(firstControllerBottom - firstBlockHeight);
    } else if (firstControllerBottom >= clientHeight) {
      setFirstBlockTop(clientHeight - firstBlockHeight);
    }
  };

  console.log(
    // firstControllerTop,
    firstControllerBottom,
    // firstControllerLeft,
    // firstControllerWidth,
    // clientHeight
    firstBlockTop
  );

  return (
    <>
      <TopBlock
        heading="Инвестиционная"
        headingSpan="деятельность"
        subheading="АО НПФ «Ренессанс пенсии» осуществляет инвестирование пенсионных резервов в интересах участников Фонда на принципах сохранности и надежности, в соответствии с действующим законодательством РФ и корпоративной инвестиционной политикой"
        image={investImage}
      />

      <Cards cards={cards} />
      <PortfolioStructure
        ifPressed={firstBlockVisible}
        controllerValue={firstSelectionValue}
        idOption={firstBlockIdOption}
        onClickController={onClickFirstSelectController}
        emitCoords={onScrollPortfolioStructure}
        emitControllerBottom={getControllerBottom}
      />
      <InvestmentArchive />
      <InvestmentDescription />

      <div
        ref={refFirstSelectBlock}
        style={{
          top: `${firstBlockTop}px`,
          left: `${firstControllerLeft + 6}px`,
          width: `${firstControllerWidth - 12}px`,
        }}
        className={firstBlockVisible ? "selection-options-block-hidden" : "selection-options-block-visible"}
      >
        <OptionsBlock
          selectionOptions={firstSelectOptions}
          emitValue={onChangeFirstSelectionBlock}
          onClickSelectionBlock={onClickFirstSelectionBlock}
        />
      </div>
    </>
  );
};

export default Investment;
