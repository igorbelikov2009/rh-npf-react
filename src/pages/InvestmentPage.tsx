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
import CompositionReserves from "../components/investment/compositionReserves/CompositionReserves/CompositionReserves";

const InvestmentPage: FC = () => {
  const [clientHeight, setClientHeight] = useState(0);

  // firstSelectController
  const [firstCurrentValue, setFirstCurrentValue] = useState("2021-11-30T09:00:00.000Z");
  const [, setFirstControllerTop] = useState(0);
  const [firstControllerBottom, setFirstControllerBottom] = useState(0);
  const [firstControllerLeft, setFirstControllerLeft] = useState(0);
  const [firstControllerWidth, setFirstControllerWidth] = useState(0);

  // firstOptionsBlock
  const [firstBlockIdOption, setFirstBlockIdOption] = useState("0");
  const [firstBlockHeight, setFirstBlockHeight] = useState(0);
  const [firstBlockTop, setFirstBlockTop] = useState(0);
  const [firstBlockVisible, setFirstBlockVisible] = useState(false);

  // secondSelectController
  const [secondCurrentValue, setSecondCurrentValue] = useState("2021-11-30T09:00:00.000Z");
  const [, setSecondControllerTop] = useState(0);
  const [secondControllerBottom, setSecondControllerBottom] = useState(0);
  const [secondControllerLeft, setSecondControllerLeft] = useState(0);
  const [secondControllerWidth, setSecondControllerWidth] = useState(0);

  // secondOptionsBlock secondBlock
  const [secondBlockIdOption, setSecondBlockIdOption] = useState("0");
  const [secondBlockHeight, setSecondBlockHeight] = useState(0);
  const [secondBlockTop, setSecondBlockTop] = useState(0);
  const [secondBlockVisible, setSecondBlockVisible] = useState(false);

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

  const ArrayOptionsBlock: IOptionItem[] = [
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

  // вызов функции получения высоты блоков опций OptionsBLock при скроллинге
  const scrollHandler = (event: any) => {
    getOptionsBlockHeight();
  };

  // Получаем значения bottom и left (selectController) из компонента PortfolioStructure.tsx
  // Они нужны для первичного установления координат при useEffect, до вызова scrollHandler
  const getFirstControllerBottomLeft = (bottom: React.SetStateAction<number>, left: React.SetStateAction<number>) => {
    setFirstControllerBottom(bottom);
    setFirstControllerLeft(left);
  };

  // Получаем значения bottom и left (selectController) из компонента CompositionReserves.tsx
  // Они нужны для первичного установления координат при useEffect, до вызова scrollHandler
  const getSecondControllerBottomLeft = (bottom: React.SetStateAction<number>, left: React.SetStateAction<number>) => {
    setSecondControllerBottom(bottom);
    setSecondControllerLeft(left);
  };

  // useEffect для первых first Controller и OptionsBlock
  useEffect(() => {
    setFirstBlockTop(firstControllerBottom);
    if (firstControllerBottom <= 0) {
      setFirstBlockTop(0);
    } else if (firstControllerBottom >= clientHeight - firstBlockHeight && firstControllerBottom <= clientHeight) {
      setFirstBlockTop(firstControllerBottom - firstBlockHeight);
    } else if (firstControllerBottom >= clientHeight) {
      setFirstBlockTop(clientHeight - firstBlockHeight);
    }
  }, [clientHeight, firstBlockHeight, firstControllerBottom]);

  // useEffect для вторых second Controller и OptionsBlock
  useEffect(() => {
    setSecondBlockTop(secondControllerBottom);
    if (secondControllerBottom <= 0) {
      setSecondBlockTop(0);
    } else if (secondControllerBottom >= clientHeight - secondBlockHeight && secondControllerBottom <= clientHeight) {
      setSecondBlockTop(secondControllerBottom - secondBlockHeight);
    } else if (secondControllerBottom >= clientHeight) {
      setSecondBlockTop(clientHeight - secondBlockHeight);
    }
  }, [clientHeight, secondBlockHeight, secondControllerBottom]);

  // Клик первого контроллера (first Controller)
  const onClickFirstSelectController = () => {
    // setFirstBlockVisible((prev) => !prev);
    setFirstBlockVisible(!firstBlockVisible);
    setSecondBlockVisible(false);
  };

  // Клик второго контроллера (second Controller)
  const onClickSecondSelectController = () => {
    setSecondBlockVisible(!secondBlockVisible);
    setFirstBlockVisible(false);
  };

  // получаем клик из first OptionsBlock
  const onClickFirstOptionsBlock = () => {
    setFirstBlockVisible(false);
  };

  // получаем клик из Second OptionsBlock
  const onClickSecondOptionsBlock = () => {
    setSecondBlockVisible(false);
  };

  // получаем изменения выбранного значения из first OptionsBlock
  const onChangeFirstOptionsBlock = (value: React.SetStateAction<string>, id: React.SetStateAction<string>) => {
    setFirstCurrentValue(value);
    setFirstBlockIdOption(id);
  };

  // получаем изменения выбранного значения из Second OptionsBlock
  const onChangeSecondOptionsBlock = (value: React.SetStateAction<string>, id: React.SetStateAction<string>) => {
    setSecondCurrentValue(value);
    setSecondBlockIdOption(id);
  };

  // Функция получения высоты окна браузера.
  const getClientHeight = () => {
    setClientHeight(window.innerHeight);
  };

  // функция получения высоты блоков опций
  const getOptionsBlockHeight = () => {
    if (refFirstSelectBlock.current) {
      setFirstBlockHeight(refFirstSelectBlock.current.getBoundingClientRect().height);
      setSecondBlockHeight(refFirstSelectBlock.current.getBoundingClientRect().height);
    }
  };

  //  Получаем top, bottom, left, width из компонента PortfolioStructure.tsx при скроллинге
  const onScrollPortfolioStructure = (
    top: React.SetStateAction<number>,
    bottom: React.SetStateAction<number>,
    left: React.SetStateAction<number>,
    width: React.SetStateAction<number>
  ) => {
    setFirstControllerTop(top);
    setFirstControllerBottom(bottom);
    setFirstControllerLeft(left);
    setFirstControllerWidth(width);
    // Делаем вызов функции
    getClientHeight();
  };

  //  Получаем top, bottom, left, width из компонента CompositionReserves.tsx при скроллинге
  const onScrollCompositionReserves = (
    top: React.SetStateAction<number>,
    bottom: React.SetStateAction<number>,
    left: React.SetStateAction<number>,
    width: React.SetStateAction<number>
  ) => {
    setSecondControllerTop(top);
    setSecondControllerBottom(bottom);
    setSecondControllerLeft(left);
    setSecondControllerWidth(width);
  };

  return (
    <>
      <TopBlock
        heading="Инвестиционная"
        headingSpan="деятельность"
        subheading="АО НПФ «Ренессанс пенсии» осуществляет инвестирование пенсионных резервов в интересах участников Фонда на принципах сохранности и надежности, в соответствии с действующим законодательством РФ и корпоративной инвестиционной политикой"
        image={investImage}
      />

      <Cards cards={cards} />

      <div id="portfolioStructure">
        <PortfolioStructure
          ifPressed={firstBlockVisible}
          controllerValue={firstCurrentValue}
          idOption={firstBlockIdOption}
          onClickController={onClickFirstSelectController}
          emitCoords={onScrollPortfolioStructure}
          emitControllerBottomLeft={getFirstControllerBottomLeft}
        />
      </div>

      <CompositionReserves
        ifPressed={secondBlockVisible}
        controllerValue={secondCurrentValue}
        idOption={secondBlockIdOption}
        onClickController={onClickSecondSelectController}
        emitCoords={onScrollCompositionReserves}
        emitControllerBottomLeft={getSecondControllerBottomLeft}
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
        className={firstBlockVisible ? "options-block-visible" : "options-block-hidden"}
      >
        <OptionsBlock
          arrayOptionsBlock={ArrayOptionsBlock}
          emitValue={onChangeFirstOptionsBlock}
          onClickOptionsBlock={onClickFirstOptionsBlock}
          currentValue={firstCurrentValue}
        />
      </div>

      <div
        style={{
          top: `${secondBlockTop}px`,
          left: `${secondControllerLeft + 6}px`,
          width: `${secondControllerWidth - 12}px`,
        }}
        className={secondBlockVisible ? "options-block-visible" : "options-block-hidden"}
      >
        <OptionsBlock
          arrayOptionsBlock={ArrayOptionsBlock}
          emitValue={onChangeSecondOptionsBlock}
          onClickOptionsBlock={onClickSecondOptionsBlock}
          currentValue={secondCurrentValue}
        />
      </div>
    </>
  );
};

export default InvestmentPage;
