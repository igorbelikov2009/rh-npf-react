import React, { FC, useState, useMemo } from "react";
import styles from "./ListNews.module.scss";
import NewsLink from "../NewsLink/NewsLink";
import UserDate from "../../../api/UserDate/UserDate";
import ControllerOption from "../../ui/select/controllerOption/ControllerOption/ControllerOption";
import AdaptiveRadio from "../../ui/radios/AdaptiveRadio/AdaptiveRadio";
import { INews, newsUsedForComputing, radioYears } from "../../../data/DataNews/DataNews";

const ListNews: FC = () => {
  //   console.log(news);
  const [selectedYear, setSelectedYear] = useState("2021");
  const [, setId] = useState("0");
  const [isRadioListVisible, setRadioListVisible] = useState(false);

  // Фильтруем массив всех отсортированных новостей, с упорядоченным id.
  // Оставляем в массиве только те новости, которые соответствуют выбранному году.
  const newsFilteredByYear = useMemo(() => {
    return [...newsUsedForComputing].filter((item) => {
      return new Date(item.date).getFullYear() === Number(selectedYear);
    });
  }, [selectedYear]);
  // console.log(newsFilteredByYear);

  // форматируем дату у новостей, отфильтрованных по годам
  const formatedFilteredByYear: INews[] = useMemo(() => {
    return [...newsFilteredByYear].map((item, index) => ({
      id: Number(item.id),
      title: String(item.title),
      date: String(UserDate.format(new Date(item.date))),
      paragraphs: item.paragraphs,
    }));
  }, [newsFilteredByYear]);
  // console.log(formatedFilteredByYear);

  const onClickController = () => {
    setRadioListVisible((prev) => !prev);
  };
  const onChangeRadioListBlock = (value: React.SetStateAction<string>, id: string) => {
    setSelectedYear(value);
    setId(id);
  };
  const onClickRadioListBlock = () => {
    setRadioListVisible(false);
  };
  const onChangeAdaptiveRadio = (value: string, id: string) => {
    setSelectedYear(value);
    setId(id);
  };

  return (
    <section className={styles["news__section"]}>
      <div className={styles["news__container-select-radio"]}>
        <div className={styles["news__select"]}>
          <ControllerOption
            currentValue={selectedYear}
            radioItems={radioYears}
            isRadioListVisible={isRadioListVisible}
            onClickController={onClickController}
            emitOnChangeRadioListBlock={onChangeRadioListBlock}
            emitOnClickRadioListBlock={onClickRadioListBlock}
          />
        </div>

        <div className={styles["news__radio"]}>
          <AdaptiveRadio currentValue={selectedYear} radioItems={radioYears} emitValue={onChangeAdaptiveRadio} />
        </div>
      </div>

      <div className={styles["news__container-news"]}>
        <div className={styles["news__list-news"]}>
          {formatedFilteredByYear.map((item) => (
            <NewsLink key={item.id} date={item.date} title={item.title} id={item.id} />
          ))}
        </div>

        <div className={styles["contact"]}>
          <p className={styles["contact__header"]}>Контакты пресс-службы</p>

          <p className={styles["contact__adress"]}>
            115114, Россия, Москва, Дербеневская набережная, 7, стр. 22, подъезд B, 3 этаж
          </p>

          <p className={styles["contact__phone"]}>Телефон: 8 (495) 933-47-66</p>
        </div>
      </div>
    </section>
  );
};

export default ListNews;
