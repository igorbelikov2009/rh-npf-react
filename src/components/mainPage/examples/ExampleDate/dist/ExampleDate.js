"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var NewsService_1 = require("../../../../services/NewsService");
var NewsItem_1 = require("../NewsItem/NewsItem");
var ExampleDate_module_scss_1 = require("./ExampleDate.module.scss");
var ExampleDate = function () {
    var selectedYear = react_1.useState("2021")[0];
    var news = NewsService_1.newsAPI.useFetchAllNewsQuery(100).data;
    // const newsSortedByDate: INews[] = useMemo(() => {
    //   return [...news].sort((a, b) => (new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1));
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    // // В отсортированном по дате массиве изменяем id, делаем его равным индексу.
    // // Получаем массив используемый для дальнейших вычислениях.
    // const newsUsedForComputing = useMemo(() => {
    //   return [...newsSortedByDate].map((item, index) => ({
    //     id: Number(index),
    //     title: String(item.title),
    //     date: String(item.date),
    //     paragraphs: item.paragraphs,
    //   }));
    // }, [newsSortedByDate]);
    // // console.log(newsUsedForComputing);
    // // Полученный массив форматируем по дате
    // const formatedDateNews: INews[] = useMemo(() => {
    //   return [...newsUsedForComputing].map((item, index) => ({
    //     id: Number(item.id),
    //     title: String(item.title),
    //     date: String(UserDate.format(new Date(item.date))),
    //     paragraphs: item.paragraphs,
    //   }));
    // }, [newsUsedForComputing]);
    // // получаем radioYears (radioItems)
    // const radioYears = useMemo(() => {
    //   return [...newsUsedForComputing]
    //     .map((item) => new Date(item.date).getFullYear())
    //     .filter((item, index, self) => index === self.indexOf(item))
    //     .map((item, index) => ({
    //       id: String(index),
    //       name: String(item),
    //       value: String(item),
    //     }));
    // }, [newsUsedForComputing]);
    // // console.log(radioYears);
    // // новости, отфильтрованные по годам
    // const newsFilteredByYear = useMemo(() => {
    //   return [...newsUsedForComputing].filter((item) => {
    //     return new Date(item.date).getFullYear() === Number(selectedYear);
    //   });
    // }, [newsUsedForComputing, selectedYear]);
    // // console.log(newsFilteredByYear);
    // // форматируем по дате новости, отфильтрованные по годам
    // const formatedFilteredByYear: INews[] = useMemo(() => {
    //   return [...newsFilteredByYear].map((item, index) => ({
    //     id: Number(item.id),
    //     title: String(item.title),
    //     date: String(UserDate.format(new Date(item.date))),
    //     paragraphs: item.paragraphs,
    //   }));
    // }, [newsFilteredByYear]);
    // // console.log(formatedFilteredByYear);
    return (react_1["default"].createElement("div", { className: ExampleDate_module_scss_1["default"]["block"] },
        react_1["default"].createElement("div", { className: ExampleDate_module_scss_1["default"]["block__head"] },
            react_1["default"].createElement("h1", { className: ExampleDate_module_scss_1["default"]["block__heading"] }, " \u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 \u043F\u043E \u0434\u0430\u0442\u0435 "),
            react_1["default"].createElement("div", null, news &&
                news.map(function (item) { return (react_1["default"].createElement(NewsItem_1["default"], { key: item.id, id: item.id, title: item.title, date: item.date, paragraphs: item.paragraphs })); })))));
};
exports["default"] = ExampleDate;
/*
  const sortedAndFormatedDateNews: INew[] = newsSortedByDate.map((item, index) => ({
    // id: Number(item.id),
    id: Number(index),
    title: String(item.title),
    date: String(UserDate.format(new Date(item.date))),
    paragraphs: item.paragraphs,
  }));

*/
