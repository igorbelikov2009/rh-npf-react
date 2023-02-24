import React, { FC, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import NewsItem from "../components/mainPage/examples/NewsItem/NewsItem";
import { useAppDispanch, useAppSelector } from "../hooks/redux";
import { IInfo } from "../models/types";
import { getFormatedNews } from "../store/reducers/newsReducer";
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
  const [info, setInfo] = useState<IInfo[]>([]);
  const [modal, setModal] = useState(true);

  // info  =======================================
  const addInfo = () => {
    // Здесь вызываем функцию setInfo, которая изменяет состояние. В неё передаём массив,
    // в нём разворачиваем старый массив информации и добавляем в него новый элемент:
    //   { title: "", description: "", number: Date.now() }.
    // number, своего рода идентификатор, получаем из времени.
    setInfo([...info, { paragraph: "", number: Date.now() }]);
    console.log(info);
  };

  // Параметром передаём номер number, полученный из времени
  const removeInfo = (number: number | undefined) => {
    // Здесь вызываем функцию setInfo, которая изменяет состояние. По существующему массиву
    // с помощью фунции filter пробегаемся и проверяем: совпадает ли номер элемента
    // с номером, который мы передали параметром.
    setInfo(info.filter((item) => item.number !== number));
    // console.log(info);
  };

  const changeInfo = (key: string, value: string, number: number | undefined) => {
    setInfo(info.map((item) => (item.number === number ? { ...item, [key]: value } : item)));
  };
  // setDate( Date.now())
  // форма создания нового объекта
  // const formsOfCreation: IFormsOfCreation[] = [
  //   {
  //     type: "text",
  //     value: title,
  //     setValue: setTitle,
  //     placeholder: "Введите название новостей",
  //   },
  //   {
  //     type: "text",
  //     value: date,
  //     setValue: setDate,
  //     placeholder: "Введите дату создания новостей",
  //   },
  //   {
  //     type: "text",
  //     value: paragraphs,
  //     setValue: setParagraphs,
  //     placeholder: "Введите текст новостей",
  //   },
  // ];

  const onHide = () => {
    setModal(false);
  };

  const addNews = () => {};

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

              {info.map((item) => (
                <Row>
                  <Col md={11}>
                    <Form.Control
                      className="admin-panel__container-input-button"
                      key={item.number}
                      placeholder="Введите текст параграфа новостей"
                      value={item.paragraph}
                      onChange={
                        (e) =>
                          //  const changeInfo = (key, value, number) => ...
                          changeInfo("paragraph", e.target.value, item.number)
                        //  номер получаем из элемента текущей итерации
                      }
                    />
                  </Col>

                  <Col md={1}>
                    <Button
                      variant={"outline-danger"}
                      onClick={() => removeInfo(item.number)}
                      // Запомни это. Без такой конфигурации этот onClick работать не будет
                    >
                      Удалить
                    </Button>
                  </Col>
                </Row>
              ))}
            </div>

            <div>
              <Button variant="outline-danger" onClick={onHide}>
                Закрыть панель администратора
              </Button>

              <Button variant="outline-success" onClick={addNews}>
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
