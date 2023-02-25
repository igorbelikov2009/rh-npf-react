import React, { FC, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import NewsItem from "../components/mainPage/examples/NewsItem/NewsItem";
import { useAppDispanch, useAppSelector } from "../hooks/redux";
import { IInfo, INews } from "../models/types";
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
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [info, setInfo] = useState<IInfo[]>([]);
  const [modal, setModal] = useState(false);

  const addInfo = () => {
    // Здесь вызываем функцию setInfo, которая изменяет состояние. В неё передаём массив,
    // в нём разворачиваем старый массив информации и добавляем в него новый элемент:
    // { description: "", number: Date.now() }
    // number (идентификатор) получаем из времени.
    // Без идентификатора функция changeInfo срабатывает одинаково на всех полях info.
    setInfo([...info, { paragraph: "", number: Date.now() }]);
    // console.log(info);
  };

  // Параметром передаём номер number, полученный из времени
  const removeInfo = (number: number | undefined) => {
    // Здесь вызываем функцию setInfo, которая изменяет состояние. По существующему массиву
    // с помощью фунции filter пробегаемся и проверяем: совпадает ли номер элемента
    // с номером, который мы передали параметром.
    setInfo(info.filter((i) => i.number !== number));
    // console.log(info);
  };

  const changeInfo = (key: string, value: string, number: number | undefined) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
    setParagraphs(info.map((item) => item.paragraph));
  };

  // создаём новый объект (newsItem), как аргумент:
  // для dispatch(addPostMich(newsItem)) на этой странице. Строка 65.
  // для addNewsItem в newsReducer. Строка 49, 56
  const newsItem: INews = {
    id: 0,
    title: title,
    date: date,
    paragraphs: paragraphs,
  };

  const handleAddNewsItem = () => {
    if (newsItem.title && newsItem.date && newsItem.paragraphs) {
      dispatch(addNewsItem(newsItem));
      console.log(newsItem);

      setTitle("");
      setDate("");
      setInfo([]);
      setModal(false);
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel__container">
        {isLoading && <h1>Loading...</h1>}
        {error && (
          <h1>
            <> {error} </>
          </h1>
        )}

        <div className="admin-panel__container-input-button">
          <Button variant={modal ? "outline-danger" : "primary"} onClick={() => setModal((prev) => !prev)}>
            {modal ? "Закрыть панель администратора" : "Открыть панель администратора"}
          </Button>
        </div>

        {modal && (
          <div>
            <div>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="admin-panel__container-input-button"
                placeholder="Введите название новостей"
              />

              <h4 className="admin-panel__paragraph">Введите дату создания новостей</h4>

              <Form.Control
                type="date"
                id="start"
                name="trip-start"
                min="2015-01-01"
                max="2022-12-31"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="admin-panel__container-input-button"
              />

              <Button
                className="admin-panel__container-input-button"
                variant="outline-success"
                onClick={() => addInfo()}
              >
                Добавить параграф
              </Button>

              {info.map((i, index) => (
                <Row key={index}>
                  <Col md={11}>
                    <Form.Control
                      className="admin-panel__container-input-button"
                      placeholder="Введите текст параграфа новостей"
                      value={i.paragraph}
                      onChange={
                        (e) =>
                          //  const changeInfo = (key, value, number) => ...
                          changeInfo("paragraph", e.target.value, i.number)
                        //  номер получаем из элемента текущей итерации
                      }
                    />
                  </Col>

                  <Col md={1}>
                    <Button
                      variant={"outline-danger"}
                      onClick={() => removeInfo(i.number)}
                      // Запомни это. Без такой конфигурации этот onClick работать не будет
                    >
                      Удалить
                    </Button>
                  </Col>
                </Row>
              ))}
            </div>

            <div>
              <Button variant="outline-success" onClick={handleAddNewsItem}>
                Добавить новости в список новостей
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
