import React, { FC, useState } from "react";
import { optionsItemsFundPerformance } from "../../../../data/InfoDisclosurePageData";
import { fundIndicatorsAPI } from "../../../../services/fundIndicatorsAPI";
import AdaptiveRadio from "../../../ui/radios/AdaptiveRadio/AdaptiveRadio";
import ControllerOption from "../../../ui/select/controllerOption/ControllerOption/ControllerOption";
import IndicatorsYear from "../IndicatorsYear/IndicatorsYear";
import styles from "./FundPerformance.module.scss";

const FundPerformance: FC = () => {
  const [currentValue, setCurrentValue] = useState("2021");
  const [idOptions, setIdOptions] = useState("0");
  const [isRadioListVisible, setRadioListVisible] = useState(false);

  // Получаем данные с сервера
  const { data: fundIndicators } = fundIndicatorsAPI.useGetFundIndicatorsQuery();

  const onChangeAdaptiveRadio = (value: string, id: string) => {
    setCurrentValue(value);
    setIdOptions(id);
  };

  const onClickController = () => {
    setRadioListVisible((prev) => !prev);
  };
  const onChangeRadioListBlock = (value: React.SetStateAction<string>, id: string) => {
    setCurrentValue(value);
    setIdOptions(id);
  };
  const onClickRadioListBlock = () => {
    setRadioListVisible(false);
  };

  return (
    <section className={styles["fund-performance"]}>
      <div className={styles["fund-performance__container"]}>
        <h1 className={styles["fund-performance__heading"]}>Показатели деятельности фонда</h1>

        <div className={styles["fund-performance__flex-container"]}>
          <div className={styles["fund-performance__select"]}>
            <ControllerOption
              currentValue={currentValue}
              optionsItems={optionsItemsFundPerformance}
              isRadioListVisible={isRadioListVisible}
              onClickController={onClickController}
              emitOnChangeRadioListBlock={onChangeRadioListBlock}
              emitOnClickRadioListBlock={onClickRadioListBlock}
            />
          </div>

          <div className={styles["fund-performance__adaptive-radio"]}>
            <AdaptiveRadio
              optionsItems={optionsItemsFundPerformance}
              currentValue={currentValue}
              emitValue={onChangeAdaptiveRadio}
            />
          </div>
        </div>

        <div className={styles["fund-performance__list"]}>
          {fundIndicators &&
            fundIndicators.map((item, index) => (
              <IndicatorsYear
                key={index}
                heading={item.heading}
                subheading={item.subheading}
                archiveLinks={item.archiveLinks}
                indicatorRows={item.indicatorRows}
                isVisible={Number(idOptions) === index}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FundPerformance;
