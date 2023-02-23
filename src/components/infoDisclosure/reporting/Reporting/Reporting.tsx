import React, { FC, useState } from "react";
import { radioItemsReporting } from "../../../../data/InfoDisclosurePageData";
import { reportingsAPI } from "../../../../services/reportingsAPI";
import ButtonToArchive from "../../../ui/buttons/ButtonToArchive/ButtonToArchive";
import AdaptiveRadio from "../../../ui/radios/AdaptiveRadio/AdaptiveRadio";
import ControllerOption from "../../../ui/select/controllerOption/ControllerOption/ControllerOption";
import Reports from "../Reports/Reports";
import styles from "./Reporting.module.scss";

interface ReportingProps {
  onClickArchiveReporting: () => void;
}

const Reporting: FC<ReportingProps> = ({ onClickArchiveReporting }) => {
  const [currentValue, setCurrentValue] = useState("2021");
  const [id, setId] = useState("0");
  const [isControllerOptionVisible, setControllerOptionVisible] = useState(false);

  // Поучаем данные с сервера
  const { data: reportings } = reportingsAPI.useGetReportingsQuery();

  const onChangeAdaptiveRadio = (value: string, id: string) => {
    setCurrentValue(value);
    setId(id);
  };
  const onClickController = () => {
    setControllerOptionVisible((prev) => !prev);
  };
  const onChangeControllerOption = (value: React.SetStateAction<string>, id: string) => {
    setCurrentValue(value);
    setId(id);
  };
  const onClickControllerOption = () => {
    setControllerOptionVisible(false);
  };

  return (
    <section className={styles["reporting"]}>
      <div className={styles["reporting__container"]}>
        <h1 className={styles["reporting__heading"]}>Отчетность</h1>

        <div className={styles["reporting__flex-container"]}>
          <div className={styles["reporting__select"]}>
            <ControllerOption
              currentValue={currentValue}
              emitOnChangeRadioListBlock={onChangeControllerOption}
              isRadioListVisible={isControllerOptionVisible}
              emitOnClickRadioListBlock={onClickControllerOption}
              onClickController={onClickController}
              radioItems={radioItemsReporting}
            />
          </div>

          <div className={styles["reporting__adaptive-radio"]}>
            <AdaptiveRadio
              currentValue={currentValue}
              radioItems={radioItemsReporting}
              emitValue={onChangeAdaptiveRadio}
            />
          </div>

          <div className={styles["reporting__container-button"]} onClick={onClickArchiveReporting}>
            <ButtonToArchive />
          </div>
        </div>

        <div>
          {reportings &&
            reportings.map((reports, index) => (
              <Reports key={index} reports={reports} isVisible={index === Number(id)} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Reporting;
