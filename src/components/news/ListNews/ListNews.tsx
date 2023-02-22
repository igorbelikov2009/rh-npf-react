import React, { FC, useState, useMemo, useEffect } from "react";
import styles from "./ListNews.module.scss";
import NewsLink from "../NewsLink/NewsLink";
import UserDate from "../../../api/UserDate/UserDate";
import ControllerOption from "../../ui/select/controllerOption/ControllerOption/ControllerOption";
import AdaptiveRadio from "../../ui/radios/AdaptiveRadio/AdaptiveRadio";
import { INews } from "../../../models/types";
import { useAppDispanch, useAppSelector } from "../../../hooks/redux";
import { getFormatedNews } from "../../../store/reducers/newsReducer";

const ListNews: FC = () => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const [, setId] = useState("0");
  const [isRadioListVisible, setRadioListVisible] = useState(false);

  // Получаем данные с сервера через newsReducer
  const dispatch = useAppDispanch();
  const { respon, isLoading, error } = useAppSelector((state) => state.newsReducer);
  const news = respon.newsUsedForComputing;

  useEffect(() => {
    dispatch(getFormatedNews());
  }, [dispatch]);

  // получаем radioYears (radioItems)
  const radioYears = [...news]
    .map((item) => new Date(item.date).getFullYear())
    .filter((item, index, self) => index === self.indexOf(item))
    .map((item, index) => ({
      id: String(index),
      title: String(item),
      value: String(item),
    }));

  // новости, отфильтрованные по годам
  const newsFilteredByYear = useMemo(() => {
    return [...news].filter((item) => {
      return new Date(item.date).getFullYear() === Number(selectedYear);
    });
  }, [news, selectedYear]);

  // форматируем дату у новостей, отфильтрованных по годам
  const formatedFilteredByYear: INews[] = useMemo(() => {
    return [...newsFilteredByYear].map((item, index) => ({
      id: Number(item.id),
      title: String(item.title),
      date: String(UserDate.format(new Date(item.date))),
      paragraphs: item.paragraphs,
    }));
  }, [newsFilteredByYear]);

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
      {isLoading && <h1>Loading...</h1>}
      {error && (
        <h1>
          <> {error} </>
        </h1>
      )}

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
