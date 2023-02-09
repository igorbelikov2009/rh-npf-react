import React from "react";
import IndicatorsYear, { IIndicatorsYear } from "../IndicatorsYear/IndicatorsYear";
import styles from "./FundPerformance.module.scss";

const FundPerformance = () => {
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
      archiveLinks: [
        {
          href: "/pdf/infoOpening/indexArchive/Finacial_data_and_performance_indicators_17-1576673962838.pdf",
          title: "Показатели деятельности Фонда с 2009 по 2017 гг.",
        },
      ],
    },
  ];

  return (
    <section className={styles["fund-performance"]}>
      <div className={styles["fund-performance__container"]}>
        <h1 className={styles["fund-performance__heading"]}>Показатели деятельности фонда</h1>

        <div className={styles["fund-performance__flex-container"]}>
          <div className={styles["fund-performance__select"]}>
            GuiRadioList
            {/* <GuiRadioList
            :value="radioValue"
            :id="idOptions"
            :isRadioListVisible="ifRadioListVisible"
            :radioListElements="radioElements"
            @onClickRadioListController="onClickRadioListController"
            @onChangeRadioListBlock="onChangeRadioListBlock"
            @onClickRadioListBlock="onClickRadioListBlock"
          /> */}
          </div>

          <div className={styles["fund-performance__adaptive-radio"]}>
            GuiAdaptiveRadio
            {/* <GuiAdaptiveRadio
            :value="radioValue"
            :id="idOptions"
            :radioElements="radioElements"
            @onChangeAdaptiveRadio="onChangeAdaptiveRadio"
          /> */}
          </div>
        </div>

        <div className={styles["fund-performance__list"]}>
          {fundIndicators.map((item) => (
            <IndicatorsYear
              heading={item.heading}
              subheading={item.subheading}
              archiveLinks={item.archiveLinks}
              indicatorRows={item.indicatorRows}
              isVisible={true}
            />
          ))}

          {/* <FundPerformanceIndicators
          v-for="(fundIndicator, index) in fundIndicators"
          :key="index"
          :heading="fundIndicator.heading"
          :subheading="fundIndicator.subheading"
          :indicatorRows="fundIndicator.indicatorRows"
          :archiveLinks="fundIndicator.archiveLinks"
          :isVisible="idOptions === index"
        /> */}
        </div>
      </div>
    </section>
  );
};

export default FundPerformance;
