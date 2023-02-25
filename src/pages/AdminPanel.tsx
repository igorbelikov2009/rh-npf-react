import React, { FC, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import NewsItem from "../components/mainPage/examples/NewsItem/NewsItem";
import { useAppDispanch, useAppSelector } from "../hooks/redux";
import { INews } from "../models/types";
import { addNewsItem, getFormatedNews } from "../store/reducers/newsReducer";
import "../styles/dist/AdminPanel.css";

const AdminPanel: FC = () => {
  // const history = useHistory();
  // const location = history.location.pathname;

  // Получаем данные с сервера через newsReducer
  const dispatch = useAppDispanch();
  const { respon, isLoading, error } = useAppSelector((state) => state.newsReducer);
  const news = respon.formatedDateNews;
  useEffect(() => {
    dispatch(getFormatedNews());
  }, [dispatch]);
  //   console.log(news);

  // title, date, paragraphs для создания нового объекта (newsItem)
  // и формы создания нового объекта (newsItem) formsOfCreation
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [info, setInfo] = useState<string[]>([]);
  const [modal, setModal] = useState(true);

  // info  =======================================
  const addInfo = () => {
    // Здесь вызываем функцию setInfo, которая изменяет состояние. В неё передаём массив,
    // в нём разворачиваем старый массив информации и добавляем в него новый элемент:
    //   description: ""
    setInfo([...info, ""]);
    console.log(info);
  };

  const changeInfo = (value: string) => {
    setInfo(info.map((item) => (item = value)));
  };

  // const changeInfo = (value: string) => {
  //   setInfo(info.map((i) => i));
  // };

  // создаём новый объект (newsItem), как аргумент:
  //  для dispatch(addPostMich(newsItem)) на этой странице. Строка 59.
  //  для addNewsItem в newsReducer. Строка 49, 56
  const newsItem: INews = {
    id: 0,
    title: title,
    date: date,
    paragraphs: info,
  };

  // ==========================================================
  const item = {
    paragraphs: [
      { par: "info", numer: 0 },
      { par: "inof", numer: 1 },
      { par: "ifon", numer: 2 },
      { par: "nfoi", numer: 3 },
    ],
  };
  // ==========================================================
  const changedItem = item.paragraphs.map((item) => item.par);
  console.log(changedItem);
  // console.log(String(item));

  const handleAddNewsItem = () => {
    if (newsItem.title && newsItem.date && newsItem.paragraphs) {
      dispatch(addNewsItem(newsItem));
      setTitle("");
      setDate("");
      setInfo([]);
      setModal(false);
    }
  };

  const onHide = () => {
    setModal(false);
  };

  // date: Date.now()
  return (
    <div className="admin-panel">
      <div className="admin-panel__container">
        {isLoading && <h1>Loading...</h1>}
        {error && (
          <h1>
            <> {error} </>
          </h1>
        )}

        {modal && (
          <div>
            <h1 className="admin-panel__subheading"> Панель администратора </h1>

            <h1 className="admin-panel__heading"> Добавить новости </h1>

            <div>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="admin-panel__container-input-button"
                placeholder="Введите название новостей"
              />

              <Form.Control
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="admin-panel__container-input-button"
                placeholder="Введите дату создания новостей"
              />

              {/* <h4 className="admin-panel__subheading">Текст новостей</h4> */}

              <Button className="admin-panel__container-input-button" variant="primary" onClick={() => addInfo()}>
                Добавить параграф
              </Button>

              {info.map((i, index) => (
                <Form.Control
                  key={index}
                  className="admin-panel__container-input-button"
                  placeholder="Введите текст параграфа новостей"
                  value={i}
                  onChange={
                    (e) =>
                      //  const changeInfo = ( value, ) => ...
                      changeInfo(e.target.value)
                    //  номер получаем из элемента текущей итерации
                  }
                />
              ))}
            </div>

            <div>
              <Button variant="outline-danger" onClick={onHide}>
                Закрыть панель администратора
              </Button>

              <Button variant="outline-success" onClick={handleAddNewsItem}>
                Добавить новости
              </Button>
            </div>
          </div>
        )}

        <h1 className="admin-panel__heading"> Список всех новостей </h1>

        <div>
          {news &&
            news.map((item) => (
              <NewsItem key={item.id} id={item.id} title={item.title} date={item.date} paragraphs={item.paragraphs} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
