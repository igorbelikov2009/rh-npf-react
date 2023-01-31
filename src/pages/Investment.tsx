import React, { FC, useState } from "react";
import TopBlock from "../components/general/TopBlock";
import investImage from "../assets/images/invest/InvestTop.jpg";
import { CardsCardProps } from "../components/general/cards/CardsCard/CardsCard";
import Cards from "../components/general/cards/Cards/Cards";
import InvestmentDescription from "../components/investment/InvestmentDescription/InvestmentDescription";
import InvestmentArchive from "../components/investment/InvestmentArchive/InvestmentArchive";
import PortfolioStructure from "../components/investment/portfolioStructure/PortfolioStructure/PortfolioStructure";

const Investment: FC = () => {
  const [firstSelectionValue, setFirstSelectionValue] = useState("30 November 2021 г.");
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

  const firstSelectionBlock = {
    idOptions: 0,
    height: 0,
    top: 0,
    isVisible: false,
  };

  const onClickFirstSelectController = () => {
    // this.firstSelectionBlock.isVisible = !this.firstSelectionBlock.isVisible;
    // this.secondSelectionBlock.isVisible = false;
    // this.firstSelectionBlock.top = this.firstSelectController.bottom;
  };
  const onScrollPortfolioStructure = () => {
    // (top, bottom, left, width, height)=>
    // this.getFirstSelectionBlockCoordsTop();
    // this.firstSelectController.top = top;
    // this.firstSelectController.bottom = bottom;
    // this.firstSelectController.left = left;
    // this.firstSelectController.width = width;
    // this.firstSelectController.height = height;
    // this.getClientHeight();
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
      <PortfolioStructure
        ifPressed={firstSelectionBlock.isVisible}
        controllerValue={firstSelectionValue}
        idOptions={firstSelectionBlock.idOptions}
        onClickController={onClickFirstSelectController}
        emitCoords={onScrollPortfolioStructure}
      />
      <InvestmentArchive />
      <InvestmentDescription />
    </>
  );
};

export default Investment;
