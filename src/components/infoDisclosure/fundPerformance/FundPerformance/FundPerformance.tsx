import React, { useState } from "react";
import AdaptiveRadio from "../../../ui/radios/AdaptiveRadio/AdaptiveRadio";
import { IAdaptiveRadioItem } from "../../../ui/radios/AdaptiveRadioItem/AdaptiveRadioItem";
import ControllerOption from "../../../ui/select/controllerOption/ControllerOption/ControllerOption";
import IndicatorsYear, { IIndicatorsYear } from "../IndicatorsYear/IndicatorsYear";
import styles from "./FundPerformance.module.scss";

const FundPerformance = () => {
  const [currentValue, setCurrentValue] = useState("2021");
  const [idOptions, setIdOptions] = useState("0");
  const [isRadioListVisible, setRadioListVisible] = useState(false);

  const radioItems: IAdaptiveRadioItem[] = [
    {
      title: "2021",
      value: "2021",
      id: "0",
    },
    {
      title: "2020",
      value: "2020",
      id: "1",
    },
    {
      title: "2019",
      value: "2019",
      id: "2",
    },
    {
      title: "2018",
      value: "2018",
      id: "3",
    },
    {
      title: "2017",
      value: "2017",
      id: "4",
    },
  ];
  const fundIndicators: IIndicatorsYear[] = [
    {
      heading: "Показатели деятельности",
      subheading: "2021",

      archiveLinks: [
        {
          href: "/pdf/infoOpening/index2021/Показатели деятельности на 31.01.2021.pdf",
          title: "Показатели деятельности на 31.01.2021",
        },
        {
          href: "/pdf/infoOpening/index2021/Показатели деятельности на 28.02.2021.pdf",
          title: "Показатели деятельности на 28.02.2021",
        },
        {
          href: "/pdf/infoOpening/index2021/Показатели деятельности на 31.03.2021.pdf",
          title: "Показатели деятельности на 31.03.2021",
        },
        {
          href: "/pdf/infoOpening/index2021/Показатели деятельности на 30.04.2021.pdf",
          title: "Показатели деятельности на 30.04.2021",
        },
        {
          href: "/pdf/infoOpening/index2021/Показатели деятельности на 31.05.2021.pdf",
          title: "Показатели деятельности на 31.05.2021",
        },
        {
          href: "/pdf/infoOpening/index2021/Показатели деятельности на 30.06.2021.pdf",
          title: "Показатели деятельности на 30.06.2021",
        },
        {
          href: "/pdf/infoOpening/index2021/Показатели деятельности на 31.07.2021.pdf",
          title: "Показатели деятельности на 31.07.2021",
        },
      ],
    },
    {
      heading: "Показатели деятельности",
      subheading: "2020",
      indicatorRows: [
        {
          title: "Количество вкладчиков фонда",
          index: "14 368",
        },
        {
          title: "Количество участников фонда (человек)",
          index: "42 366",
        },
        {
          title: "Количество участников, получающих негосударственную пенсию (человек)",
          index: "233",
        },
        {
          title:
            "Размер дохода от размещения пенсионных резервов (результат инвестирования пенсионных резервов), подлежащий зачислению на пенсионные счета негосударственного пенсионного обеспечения, тыс. руб.",
          index: "1 137 798, 01",
        },
        {
          title:
            "Размер дохода от размещения пенсионных резервов, направленный на формирование страхового резерва, тыс. руб.",
          index: "136 741, 37",
        },
        {
          title: "Размер пенсионных резервов, тыс. руб.",
          index: "23 480 406,17",
        },
        {
          title: "в том числе: размер страхового резерва, тыс. руб.",
          index: "1 752 717,32",
        },
        {
          title:
            "Результаты размещения средств пенсионных резервов на основании данных о средней расчетной ставке доходности от размещения пенсионных резервов, в соответствии с которой направлен доход на пополнение резервов покрытия пенсионных обязательств за отчетный год",
          index: "5,77%",
        },
        {
          title:
            "Средневзвешенный процент, на который был увеличен размер назначенных негосударственных пенсий по итогам размещения средств пенсионных резервов за отчетный год",
          index: "7,29%",
        },
      ],
      archiveLinks: [
        {
          href: "/pdf/infoOpening/index2020/Показатели деятельности на 31.01.2020.pdf",
          title: "Показатели деятельности на 31.01.2020",
        },
        {
          href: "/pdf/infoOpening/index2020/Показатели деятельности на 29.02.2020.pdf",
          title: "Показатели деятельности на 29.02.2020",
        },
        {
          href: "/pdf/infoOpening/index2020/Показатели деятельности на 31.03.2020.pdf",
          title: "Показатели деятельности на 31.03.2020",
        },
        {
          href: "/pdf/infoOpening/index2020/Показатели деятельности на 30.04.2020.pdf",
          title: "Показатели деятельности на 30.04.2020",
        },
        {
          href: "/pdf/infoOpening/index2020/Показатели деятельности на 31.05.2020.pdf",
          title: "Показатели деятельности на 31.05.2020",
        },
        {
          href: "/pdf/infoOpening/index2020/Показатели деятельности на 30.06.2020.pdf",
          title: "Показатели деятельности на 30.06.2020",
        },
        {
          href: "/pdf/infoOpening/index2020/Показатели деятельности на 31.07.2020.pdf",
          title: "Показатели деятельности на 31.07.2020",
        },
        {
          href: "/pdf/infoOpening/index2020/Показатели деятельности на 31.08.2020.pdf",
          title: "Показатели деятельности на 31.08.2020",
        },
        {
          href: "/pdf/infoOpening/index2020/Показатели деятельности на 30.09.2020.pdf",
          title: "Показатели деятельности на 30.09.2020",
        },
        {
          href: "/pdf/infoOpening/index2020/Показатели деятельности на 31.10.2020.pdf",
          title: "Показатели деятельности на 31.10.2020",
        },
        {
          href: "/pdf/infoOpening/index2020/Показатели деятельности на 30.11.2020.pdf",
          title: "Показатели деятельности на 30.11.2020",
        },
        {
          href: "/pdf/infoOpening/index2020/Показатели деятельности на 31.12.2020.pdf",
          title: "Показатели деятельности на 31.12.2020",
        },
      ],
    },
    {
      heading: "Показатели деятельности",
      subheading: "2019",
      indicatorRows: [
        {
          title: "Количество вкладчиков фонда",
          index: "13 652",
        },
        {
          title: "Количество участников фонда (человек)",
          index: "41 609",
        },
        {
          title: "Количество участников, получающих негосударственную пенсию (человек)",
          index: "198",
        },
        {
          title:
            "Размер дохода от размещения пенсионных резервов (результат инвестирования пенсионных резервов), подлежащий зачислению на пенсионные счета негосударственного пенсионного обеспечения, тыс. руб.",
          index: "1 429 559,88",
        },
        {
          title:
            "Размер дохода от размещения пенсионных резервов, направленный на формирование страхового резерва, тыс. руб.",
          index: "142 229,62",
        },
        {
          title: "Размер пенсионных резервов, тыс. руб.",
          index: "20 385 221,50",
        },
        {
          title: "в том числе: размер страхового резерва, тыс. руб.",
          index: "1 537 201,58",
        },
        {
          title:
            "Результаты размещения средств пенсионных резервов на основании данных о средней расчетной ставке доходности от размещения пенсионных резервов, в соответствии с которой направлен доход на пополнение резервов покрытия пенсионных обязательств за отчетный год",
          index: "8,60%",
        },
        {
          title:
            "Средневзвешенный процент, на который был увеличен размер назначенных негосударственных пенсий по итогам размещения средств пенсионных резервов за отчетный год",
          index: "9,74%",
        },
      ],
      archiveLinks: [
        {
          href: "/pdf/infoOpening/index2019/Показатели деятельности на 30.09.2019.pdf",
          title: "Показатели деятельности на 30.09.2019",
        },
        {
          href: "/pdf/infoOpening/index2019/Показатели деятельности на 31.10.2019.pdf",
          title: "Показатели деятельности на 31.10.2019",
        },
        {
          href: "/pdf/infoOpening/index2019/Показатели деятельности на 30.11.2019.pdf",
          title: "Показатели деятельности на 30.11.2019",
        },
      ],
    },
    {
      heading: "Показатели деятельности",
      subheading: "2018",
      indicatorRows: [
        {
          title: "Количество вкладчиков фонда",
          index: "12 059",
        },
        {
          title: "Количество участников фонда (человек)",
          index: "40 195",
        },
        {
          title: "Количество участников, получающих негосударственную пенсию (человек)",
          index: "166",
        },
        {
          title:
            "Размер дохода от размещения пенсионных резервов (результат инвестирования пенсионных резервов), подлежащий зачислению на пенсионные счета негосударственного пенсионного обеспечения, тыс. руб.",
          index: "637 892",
        },
        {
          title:
            "Размер дохода от размещения пенсионных резервов, направленный на формирование страхового резерва, тыс. руб.",
          index: "80 271",
        },
        {
          title: "Размер пенсионных резервов, тыс. руб.",
          index: "16 946 469",
        },
        {
          title: "в том числе: размер страхового резерва, тыс. руб.",
          index: "1 328 519",
        },
        {
          title:
            "Результаты размещения средств пенсионных резервов на основании данных о средней расчетной ставке доходности от размещения пенсионных резервов, в соответствии с которой направлен доход на пополнение резервов покрытия пенсионных обязательств за отчетный год",
          index: "4,47%",
        },
        {
          title:
            "Средневзвешенный процент, на который был увеличен размер назначенных негосударственных пенсий по итогам размещения средств пенсионных резервов за отчетный год",
          index: "4,8%",
        },
      ],
      archiveLinks: [
        {
          href: "/pdf/infoOpening/index2019/Показатели деятельности на 30.09.2018.pdf",
          title: "Показатели деятельности на 30.09.2019",
        },
        {
          href: "/pdf/infoOpening/index2019/Показатели деятельности на 31.10.2018.pdf",
          title: "Показатели деятельности на 31.10.2019",
        },
        {
          href: "/pdf/infoOpening/index2019/Показатели деятельности на 30.11.2018.pdf",
          title: "Показатели деятельности на 30.11.2019",
        },
      ],
    },
    {
      heading: "Показатели деятельности",
      subheading: "2017",
      archiveLinks: [
        {
          href: "/pdf/infoOpening/indexArchive/Finacial_data_and_performance_indicators_17-1576673962838.pdf",
          title: "Показатели деятельности Фонда с 2009 по 2017 гг.",
        },
      ],
    },
  ];

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
              radioItems={radioItems}
              isRadioListVisible={isRadioListVisible}
              onClickController={onClickController}
              emitOnChangeRadioListBlock={onChangeRadioListBlock}
              emitOnClickRadioListBlock={onClickRadioListBlock}
            />
          </div>

          <div className={styles["fund-performance__adaptive-radio"]}>
            <AdaptiveRadio radioItems={radioItems} currentValue={currentValue} emitValue={onChangeAdaptiveRadio} />
          </div>
        </div>

        <div className={styles["fund-performance__list"]}>
          {fundIndicators.map((item, index) => (
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
