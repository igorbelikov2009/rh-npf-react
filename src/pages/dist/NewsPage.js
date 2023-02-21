"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var UserDate_1 = require("../api/UserDate/UserDate");
var TripleIcon_1 = require("../components/general/TripleIcon/TripleIcon");
var NewsLink_1 = require("../components/news/NewsLink/NewsLink");
var Article_1 = require("../components/newsPage/Article/Article");
var NewsService_1 = require("../services/NewsService");
require("../styles/dist/NewsPage.css");
var NewsPage = function () {
    var id = react_router_dom_1.useParams().id;
    var prevID = Number(id) - 1;
    var nextID = Number(id) + 1;
    var _a = react_1.useState(false), isHovered = _a[0], setHovered = _a[1];
    // Получаем данные с сервера и обрабатываем их.===============
    var _b = react_1.useState([]), news = _b[0], setNews = _b[1];
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
    // Фильтруем массив всех отсортированных новостей, с упорядоченным id, с отформатированной датой
    // Оставляем в массиве только те новости, ID которых соответствуют prevID и nextID.
    var anotherNews = react_1.useMemo(function () {
        return __spreadArrays(formatedDateNews).filter(function (item) {
            return item.id === prevID || item.id === nextID;
        });
    }, [formatedDateNews, nextID, prevID]);
    // console.log(anotherNews);
    var currentNews = react_1.useMemo(function () {
        return __spreadArrays(formatedDateNews).filter(function (item) {
            return item.id === Number(id);
        });
    }, [formatedDateNews, id]);
    // console.log(currentNews);
    return (react_1["default"].createElement("div", { className: "news-page" },
        react_1["default"].createElement("div", { className: "news-page__head" },
            react_1["default"].createElement("div", { className: "news-page__container" },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/news", className: "news-page__link-to-news", onMouseOver: function () { return setHovered(true); }, onMouseOut: function () { return setHovered(false); } },
                    react_1["default"].createElement("div", { className: "news-page__icons" },
                        react_1["default"].createElement(TripleIcon_1["default"], { hovered: isHovered, light: false, icon: "Arrow Down" })),
                    react_1["default"].createElement("p", { className: "news-page__link-title" }, "\u041A \u0441\u043F\u0438\u0441\u043A\u0443 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439")),
                currentNews ? (currentNews.map(function (news, index) { return (react_1["default"].createElement(Article_1["default"], { key: index, id: news.id, date: news.date, title: news.title, paragraphs: news.paragraphs })); })) : (react_1["default"].createElement("div", null,
                    " \u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0441 ID ",
                    id,
                    " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")),
                react_1["default"].createElement("div", { className: "news-page__footer" },
                    react_1["default"].createElement("h1", { className: "news-page__footer-heading" }, "\u0414\u0440\u0443\u0433\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438"),
                    anotherNews &&
                        anotherNews.map(function (item, index) { return (react_1["default"].createElement(NewsLink_1["default"], { key: index, date: item.date, title: item.title, id: Number(item.id) })); }))))));
};
exports["default"] = NewsPage;
