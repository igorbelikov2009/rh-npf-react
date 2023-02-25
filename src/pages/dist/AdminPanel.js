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
var react_bootstrap_1 = require("react-bootstrap");
var NewsItem_1 = require("../components/mainPage/examples/NewsItem/NewsItem");
var redux_1 = require("../hooks/redux");
var newsReducer_1 = require("../store/reducers/newsReducer");
require("../styles/dist/AdminPanel.css");
var AdminPanel = function () {
    // const history = useHistory();
    // const location = history.location.pathname;
    // Получаем данные с сервера через newsReducer
    var dispatch = redux_1.useAppDispanch();
    var _a = redux_1.useAppSelector(function (state) { return state.newsReducer; }), respon = _a.respon, isLoading = _a.isLoading, error = _a.error;
    var news = respon.formatedDateNews;
    react_1.useEffect(function () {
        dispatch(newsReducer_1.getFormatedNews());
    }, [dispatch]);
    //   console.log(news);
    // title, date, paragraphs для создания нового объекта (newsItem)
    // и формы создания нового объекта (newsItem) formsOfCreation
    var _b = react_1.useState(""), title = _b[0], setTitle = _b[1];
    var _c = react_1.useState(""), date = _c[0], setDate = _c[1];
    var _d = react_1.useState([]), info = _d[0], setInfo = _d[1];
    var _e = react_1.useState(true), modal = _e[0], setModal = _e[1];
    // info  =======================================
    var addInfo = function () {
        // Здесь вызываем функцию setInfo, которая изменяет состояние. В неё передаём массив,
        // в нём разворачиваем старый массив информации и добавляем в него новый элемент:
        //   description: ""
        setInfo(__spreadArrays(info, [""]));
        console.log(info);
    };
    var changeInfo = function (value) {
        setInfo(info.map(function (item) { return (item = value); }));
    };
    // const changeInfo = (value: string) => {
    //   setInfo(info.map((i) => i));
    // };
    // создаём новый объект (newsItem), как аргумент:
    //  для dispatch(addPostMich(newsItem)) на этой странице. Строка 59.
    //  для addNewsItem в newsReducer. Строка 49, 56
    var newsItem = {
        id: 0,
        title: title,
        date: date,
        paragraphs: info
    };
    // ==========================================================
    var item = {
        paragraphs: [
            { par: "info", numer: 0 },
            { par: "inof", numer: 1 },
            { par: "ifon", numer: 2 },
            { par: "nfoi", numer: 3 },
        ]
    };
    // ==========================================================
    var changedItem = item.paragraphs.map(function (item) { return item.par; });
    console.log(changedItem);
    // console.log(String(item));
    var handleAddNewsItem = function () {
        if (newsItem.title && newsItem.date && newsItem.paragraphs) {
            dispatch(newsReducer_1.addNewsItem(newsItem));
            setTitle("");
            setDate("");
            setInfo([]);
            setModal(false);
        }
    };
    var onHide = function () {
        setModal(false);
    };
    // date: Date.now()
    return (react_1["default"].createElement("div", { className: "admin-panel" },
        react_1["default"].createElement("div", { className: "admin-panel__container" },
            isLoading && react_1["default"].createElement("h1", null, "Loading..."),
            error && (react_1["default"].createElement("h1", null,
                react_1["default"].createElement(react_1["default"].Fragment, null,
                    " ",
                    error,
                    " "))),
            modal && (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { className: "admin-panel__subheading" }, " \u041F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 "),
                react_1["default"].createElement("h1", { className: "admin-panel__heading" }, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0441\u0442\u0438 "),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { value: title, onChange: function (e) { return setTitle(e.target.value); }, className: "admin-panel__container-input-button", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439" }),
                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { value: date, onChange: function (e) { return setDate(e.target.value); }, className: "admin-panel__container-input-button", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439" }),
                    react_1["default"].createElement(react_bootstrap_1.Button, { className: "admin-panel__container-input-button", variant: "primary", onClick: function () { return addInfo(); } }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u0433\u0440\u0430\u0444"),
                    info.map(function (i, index) { return (react_1["default"].createElement(react_bootstrap_1.Form.Control, { key: index, className: "admin-panel__container-input-button", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043F\u0430\u0440\u0430\u0433\u0440\u0430\u0444\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439", value: i, onChange: function (e) {
                            //  const changeInfo = ( value, ) => ...
                            return changeInfo(e.target.value);
                        } })); })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(react_bootstrap_1.Button, { variant: "outline-danger", onClick: onHide }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430"),
                    react_1["default"].createElement(react_bootstrap_1.Button, { variant: "outline-success", onClick: handleAddNewsItem }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0441\u0442\u0438")))),
            react_1["default"].createElement("h1", { className: "admin-panel__heading" }, " \u0421\u043F\u0438\u0441\u043E\u043A \u0432\u0441\u0435\u0445 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 "),
            react_1["default"].createElement("div", null, news &&
                news.map(function (item) { return (react_1["default"].createElement(NewsItem_1["default"], { key: item.id, id: item.id, title: item.title, date: item.date, paragraphs: item.paragraphs })); })))));
};
exports["default"] = AdminPanel;
