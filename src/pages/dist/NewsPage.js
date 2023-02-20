"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var TripleIcon_1 = require("../components/general/TripleIcon/TripleIcon");
var NewsLink_1 = require("../components/news/NewsLink/NewsLink");
var Article_1 = require("../components/newsPage/Article/Article");
require("../styles/dist/NewsPage.css");
var NewsPage = function () {
    var _a = react_1.useState(false), isHovered = _a[0], setHovered = _a[1];
    var link = {
        id: 37,
        title: "НПФ Сбербанка и НПФ «Ренессанс пенсии» закрыли сделку",
        date: "2015-11-07T09:00:00.000Z",
        paragraphs: [
            "Информируем вас, что в период с 15 по 18 июня 2021 включительно офис Фонда по адресу: 115114, г. Москва, Дербеневская наб., д. 7, стр. 22 работает в обычном режиме для посетителей.",
            "Мы предоставим поддержку всем клиентам по обычному графику Пн. – Пт.: с 9:00 до 19:00 по московскому времени в режиме дистанционного обслуживания:",
            "Для звонков из Москвы и других стран +7 495 933-47-66",
            "Для звонков из других регионов России 8 800 200-47-66",
        ]
    };
    var id = react_router_dom_1.useParams().id;
    return (react_1["default"].createElement("div", { className: "news-page" },
        react_1["default"].createElement("div", { className: "news-page__head" },
            react_1["default"].createElement("div", { className: "news-page__container" },
                react_1["default"].createElement("div", { className: "news-page__link-to-news", onMouseOver: function () { return setHovered(true); }, onMouseOut: function () { return setHovered(false); } },
                    react_1["default"].createElement("div", { className: "news-page__icons" },
                        react_1["default"].createElement(TripleIcon_1["default"], { hovered: isHovered, light: false, icon: "Arrow Down" })),
                    react_1["default"].createElement("p", { className: "news-page__link-title" }, "\u041A \u0441\u043F\u0438\u0441\u043A\u0443 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439")),
                link ? react_1["default"].createElement(Article_1["default"], { link: link }) : react_1["default"].createElement("div", null,
                    " \u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0441 ID ",
                    id,
                    " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"),
                react_1["default"].createElement("div", { className: "news-page__footer" },
                    react_1["default"].createElement("h1", { className: "news-page__footer-heading" }, "\u0414\u0440\u0443\u0433\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438"),
                    react_1["default"].createElement(NewsLink_1["default"], { date: link.date, title: link.title, id: Number(id) }),
                    react_1["default"].createElement(NewsLink_1["default"], { date: link.date, title: link.title, id: Number(id) }))))));
};
exports["default"] = NewsPage;
