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
var ListNews_module_scss_1 = require("./ListNews.module.scss");
var NewsLink_1 = require("../NewsLink/NewsLink");
var UserDate_1 = require("../../../api/UserDate/UserDate");
var ControllerOption_1 = require("../../ui/select/controllerOption/ControllerOption/ControllerOption");
var AdaptiveRadio_1 = require("../../ui/radios/AdaptiveRadio/AdaptiveRadio");
var NewsService_1 = require("../../../services/NewsService");
var ListNews = function () {
    //   console.log(news);
    var _a = react_1.useState("2021"), selectedYear = _a[0], setSelectedYear = _a[1];
    var _b = react_1.useState("0"), setId = _b[1];
    var _c = react_1.useState(false), isRadioListVisible = _c[0], setRadioListVisible = _c[1];
    // ==============================================
    var _d = react_1.useState([]), news = _d[0], setNews = _d[1];
    var webNews = NewsService_1.newsAPI.useFetchAllNewsQuery(100).data;
    react_1.useEffect(function () {
        if (webNews) {
            setNews(webNews);
        }
    }, [webNews]);
    // Получаем отсортированный по дате массив новостей
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
    // получаем radioYears (radioItems)
    var radioYears = __spreadArrays(newsUsedForComputing).map(function (item) { return new Date(item.date).getFullYear(); })
        .filter(function (item, index, self) { return index === self.indexOf(item); })
        .map(function (item, index) { return ({
        id: String(index),
        title: String(item),
        value: String(item)
    }); });
    // console.log(radioYears);
    // новости, отфильтрованные по годам
    var newsFilteredByYear = react_1.useMemo(function () {
        return __spreadArrays(newsUsedForComputing).filter(function (item) {
            return new Date(item.date).getFullYear() === Number(selectedYear);
        });
    }, [newsUsedForComputing, selectedYear]);
    // console.log(newsFilteredByYear);
    // форматируем дату у новостей, отфильтрованных по годам
    var formatedFilteredByYear = react_1.useMemo(function () {
        return __spreadArrays(newsFilteredByYear).map(function (item, index) { return ({
            id: Number(item.id),
            title: String(item.title),
            date: String(UserDate_1["default"].format(new Date(item.date))),
            paragraphs: item.paragraphs
        }); });
    }, [newsFilteredByYear]);
    // console.log(formatedFilteredByYear);
    // ==============================================
    var onClickController = function () {
        setRadioListVisible(function (prev) { return !prev; });
    };
    var onChangeRadioListBlock = function (value, id) {
        setSelectedYear(value);
        setId(id);
    };
    var onClickRadioListBlock = function () {
        setRadioListVisible(false);
    };
    var onChangeAdaptiveRadio = function (value, id) {
        setSelectedYear(value);
        setId(id);
    };
    return (react_1["default"].createElement("section", { className: ListNews_module_scss_1["default"]["news__section"] },
        react_1["default"].createElement("p", { className: ListNews_module_scss_1["default"]["news__prompt"] }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0443\u0435\u043C \u0432 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B\u0435: json-server --watch db.json --port 5000"),
        react_1["default"].createElement("div", { className: ListNews_module_scss_1["default"]["news__container-select-radio"] },
            react_1["default"].createElement("div", { className: ListNews_module_scss_1["default"]["news__select"] },
                react_1["default"].createElement(ControllerOption_1["default"], { currentValue: selectedYear, radioItems: radioYears, isRadioListVisible: isRadioListVisible, onClickController: onClickController, emitOnChangeRadioListBlock: onChangeRadioListBlock, emitOnClickRadioListBlock: onClickRadioListBlock })),
            react_1["default"].createElement("div", { className: ListNews_module_scss_1["default"]["news__radio"] },
                react_1["default"].createElement(AdaptiveRadio_1["default"], { currentValue: selectedYear, radioItems: radioYears, emitValue: onChangeAdaptiveRadio }))),
        react_1["default"].createElement("div", { className: ListNews_module_scss_1["default"]["news__container-news"] },
            react_1["default"].createElement("div", { className: ListNews_module_scss_1["default"]["news__list-news"] }, formatedFilteredByYear.map(function (item) { return (react_1["default"].createElement(NewsLink_1["default"], { key: item.id, date: item.date, title: item.title, id: item.id })); })),
            react_1["default"].createElement("div", { className: ListNews_module_scss_1["default"]["contact"] },
                react_1["default"].createElement("p", { className: ListNews_module_scss_1["default"]["contact__header"] }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u043F\u0440\u0435\u0441\u0441-\u0441\u043B\u0443\u0436\u0431\u044B"),
                react_1["default"].createElement("p", { className: ListNews_module_scss_1["default"]["contact__adress"] }, "115114, \u0420\u043E\u0441\u0441\u0438\u044F, \u041C\u043E\u0441\u043A\u0432\u0430, \u0414\u0435\u0440\u0431\u0435\u043D\u0435\u0432\u0441\u043A\u0430\u044F \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430\u044F, 7, \u0441\u0442\u0440. 22, \u043F\u043E\u0434\u044A\u0435\u0437\u0434 B, 3 \u044D\u0442\u0430\u0436"),
                react_1["default"].createElement("p", { className: ListNews_module_scss_1["default"]["contact__phone"] }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: 8 (495) 933-47-66")))));
};
exports["default"] = ListNews;
