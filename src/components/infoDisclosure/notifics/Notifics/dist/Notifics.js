"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioCircle_1 = require("../../../ui/radioCircle/RadioCircle/RadioCircle");
var NotificsContent_1 = require("../NotificsContent/NotificsContent");
var Notifics_module_scss_1 = require("./Notifics.module.scss");
var Notifics = function () {
    var _a = react_1.useState("2021"), currentValue = _a[0], setCurrentValue = _a[1];
    var contents = [
        {
            // date: '12.01.2021',
            date: "2021-01-12T00:00:00.000",
            description: "АО НПФ «Ренессанс пенсии» заключил договор доверительного управления пенсионными резервами №311220/1 от 31 декабря 2020 года с Акционерным обществом «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия № 21-000-1-00054 от 3 декабря 2001 года)."
        },
        {
            // date: '21.02.2020',
            date: "2020-02-21T00:00:00.000",
            description: "АО НПФ «Ренессанс пенсии» заключил договоры доверительного управления пенсионными резервами №200220/1 от 20 февраля 2020 года и №200220/2 от 20 февраля 2020 года с Акционерным обществом «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия № 21-000-1-00054 от 3 декабря 2001 года)."
        },
        {
            // date: '29.05.2018',
            date: "2018-05-29T00:00:00.000",
            description: "НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» заключил договор доверительного управления пенсионными резервами № 250518/1 от 25 мая 2018 года с Акционерным обществом «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия № 21-000-1-00054 от 3 декабря 2001 года)."
        },
    ];
    var radioItems = [
        { title: "2021", value: "2021" },
        { title: "2020", value: "2020" },
        { title: "2018", value: "2018" },
    ];
    var onChangeRadio = function (value) {
        setCurrentValue(value);
    };
    console.log(currentValue);
    return (react_1["default"].createElement("section", { className: Notifics_module_scss_1["default"]["notifics"] },
        react_1["default"].createElement("div", { className: Notifics_module_scss_1["default"]["notifics__container"] },
            react_1["default"].createElement("h2", { className: Notifics_module_scss_1["default"]["notifics__heading"] }, "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"),
            react_1["default"].createElement("div", { className: Notifics_module_scss_1["default"]["notifics__triple-param-switch"] },
                react_1["default"].createElement(RadioCircle_1["default"], { currentValue: currentValue, radioItems: radioItems, emitValue: onChangeRadio })),
            react_1["default"].createElement("div", { className: Notifics_module_scss_1["default"]["notifics__content"] }, contents.map(function (content, index) { return (react_1["default"].createElement(NotificsContent_1["default"], { key: index, content: content, isVisible: true })); })))));
};
exports["default"] = Notifics;
