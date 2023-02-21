"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var UserDate_1 = require("../../../../api/UserDate/UserDate");
var NewsService_1 = require("../../../../services/NewsService");
var NewsItem_1 = require("../NewsItem/NewsItem");
var ExampleDate_module_scss_1 = require("./ExampleDate.module.scss");
var ExampleDate = function () {
    var selectedYear = react_1.useState("2021")[0];
    var _a = react_1.useState([]), news = _a[0], setNews = _a[1];
    var webNews = NewsService_1.newsAPI.useFetchAllNewsQuery(100).data;
    react_1.useEffect(function () {
        if (webNews) {
            setNews(webNews);
        }
    }, [webNews]);
    var newsSortedByDate = react_1.useMemo(function () {
        return __spreadArrays(news).sort(function (a, b) { return (new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1); });
    }, [news]);
    // console.log(newsSortedByDate);
    // В отсортированном по дате массиве изменяем id, делаем его равным индексу.
    // Получаем массив используемый для дальнейших вычислениях.
    var newsUsedForComputing = react_1.useMemo(function () {
        return __spreadArrays(newsSortedByDate).map(function (item, index) { return ({
            id: Number(index),
            title: String(item.title),
            date: String(item.date),
            paragraphs: item.paragraphs
        }); });
    }, [newsSortedByDate]);
    // console.log(newsUsedForComputing);
    // Полученный массив форматируем по дате
    var formatedDateNews = react_1.useMemo(function () {
        return __spreadArrays(newsUsedForComputing).map(function (item, index) { return ({
            id: Number(item.id),
            title: String(item.title),
            date: String(UserDate_1["default"].format(new Date(item.date))),
            paragraphs: item.paragraphs
        }); });
    }, [newsUsedForComputing]);
    // console.log(formatedDateNews);
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
            react_1["default"].createElement("p", { className: ExampleDate_module_scss_1["default"]["block__paragraph"] }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0443\u0435\u043C \u0432 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B\u0435: json-server --watch db.json --port 5000"),
            react_1["default"].createElement("div", null, formatedDateNews &&
                formatedDateNews.map(function (item) { return (react_1["default"].createElement(NewsItem_1["default"], { key: item.id, id: item.id, title: item.title, date: item.date, paragraphs: item.paragraphs })); })))));
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
