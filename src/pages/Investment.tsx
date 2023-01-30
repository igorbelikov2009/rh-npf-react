import React, { FC } from "react";
import TopBlock from "../components/general/TopBlock";
import investImage from "../assets/images/invest/InvestTop.jpg";
import { CardsCardProps } from "../components/general/cards/CardsCard/CardsCard";
import Cards from "../components/general/cards/Cards/Cards";

const Investment: FC = () => {
  const cards: CardsCardProps[] = [
    { icon: "Money", subtitle: "Сохранение и приумножение средств вкладчиков и участников" },
    { icon: "Separation", subtitle: "Диверсификация активов" },

    { icon: "Magnifier", subtitle: "Четкий контроль и прозрачность всех операций" },
    {
      icon: "Book",
      subtitle: "Соответствие Российским законодательным требованиям и лучшим мировым практикам",
    },
    {
      icon: "Partner",
      subtitle: "Независимость в выборе партнеров – на основе открытых тендеров",
    },
  ];

  return (
    <>
      <TopBlock
        heading="Инвестиционная"
        headingSpan="деятельность"
        subheading="АО НПФ «Ренессанс пенсии» осуществляет инвестирование пенсионных резервов в интересах участников Фонда на принципах сохранности и надежности, в соответствии с действующим законодательством РФ и корпоративной инвестиционной политикой"
        image={investImage}
      />

      <Cards cards={cards} />
    </>
  );
};

export default Investment;
