import React, { FC, useEffect, useRef, useState } from "react";
import { investmentTablesAPI } from "../../../../services/investmentTablesAPI";
import Controller from "../../../ui/select/Controller/Controller";
import CompositionBlock from "../CompositionBlock/CompositionBlock";
import styles from "./CompositionReserves.module.scss";

export interface CompositionReservesProps {
  ifPressed: boolean;
  controllerValue: string;
  idOption: string;
  onClickController: () => void;
  emitCoords: (top: number, bottom: number, left: number, width: number) => void;
  emitControllerBottomLeft: (bottom: number, left: number) => void;
}

const CompositionReserves: FC<CompositionReservesProps> = ({
  ifPressed,
  controllerValue,
  idOption,
  onClickController,
  emitCoords,
  emitControllerBottomLeft,
}) => {
  // Получаем данные с сервера
  const { data: investmentTables } = investmentTablesAPI.useGetInvestmentTablesQuery();

  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  const selectController = useRef<HTMLDivElement>(null);

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
    <section className={styles["composition-of-funds"]}>
      <h1 className={styles["composition-of-funds__heading"]}>Состав средств пенсионных резервов Фонда</h1>

      <div className={styles["composition-of-funds__selection"]} ref={selectController}>
        <Controller ifPressed={ifPressed} value={controllerValue} onClickController={onClickController} />
      </div>

      {investmentTables &&
        investmentTables.map((arrayOfExpanderTables, index) => (
          <CompositionBlock
            key={index}
            arrayOfExpanderTables={arrayOfExpanderTables}
            isVisible={index === Number(idOption)}
          />
        ))}
    </section>
  );
};

export default CompositionReserves;
