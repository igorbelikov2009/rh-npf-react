import React, { FC, useEffect } from "react";
import CarouselCard from "../CarouselCard/CarouselCard";
import style from "./BusinessCarousel.module.scss";

type ICarouselCard = {
  value: string;
  icon: string;
  title: string;
};

interface BusinessCarouselProps {
  currentValue: number;
  emitAmountChildren: (value: number) => void;
  emitValue: (value: string) => void;
}

const BusinessCarousel: FC<BusinessCarouselProps> = ({ currentValue, emitAmountChildren, emitValue }) => {
  const cards: ICarouselCard[] = [
    {
      value: "0",
      icon: "Money",
      title: "Увеличение социальных гарантий",
    },
    {
      value: "1",
      icon: "Circle",
      title: "Сокращение текучести кадров",
    },
    {
      value: "2",
      icon: "Young",
      title: "Своевременное омоложение коллектива",
    },
    {
      value: "3",
      icon: "Lever",
      title: "Рычаги управления коллективом",
    },
    {
      value: "4",
      icon: "Motivate",
      title: "Мотивация к долгосрочному труду",
    },
    {
      value: "5",
      icon: "Settings",
      title: "Оптимизация налогообложения организации",
    },
    {
      value: "6",
      icon: "Check",
      title: "Сокращение издержек на социальную поддержку пенсионеров",
    },
  ];

  useEffect(() => {
    emitAmountChildren(cards.length);
  }, [cards.length, emitAmountChildren]);

  const onChangeCarouselRadio = (value: string) => {
    emitValue(value);
  };

  return (
    <div className={style["carousel__container"]}>
      {cards.map((card, index) => (
        <CarouselCard
          key={index}
          emitValue={onChangeCarouselRadio}
          icon={card.icon}
          title={card.title}
          value={card.value}
          isActive={index === currentValue}
        />
      ))}
    </div>
  );
};

export default BusinessCarousel;
