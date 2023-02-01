"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TopBlock_1 = require("../components/general/TopBlock");
var InvestTop_jpg_1 = require("../assets/images/invest/InvestTop.jpg");
var Cards_1 = require("../components/general/cards/Cards/Cards");
var InvestmentDescription_1 = require("../components/investment/InvestmentDescription/InvestmentDescription");
var InvestmentArchive_1 = require("../components/investment/InvestmentArchive/InvestmentArchive");
var PortfolioStructure_1 = require("../components/investment/portfolioStructure/PortfolioStructure/PortfolioStructure");
require("../styles/dist/Investment.css");
var OptionsBlock_1 = require("../components/ui/select/OptionsBlock/OptionsBlock");
var Investment = function () {
    var _a = react_1.useState(0), clientHeight = _a[0], setClientHeight = _a[1];
    var _b = react_1.useState("30 November 2021 г."), firstSelectionValue = _b[0], setFirstSelectionValue = _b[1];
    // firstSelectController
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _c = react_1.useState(0), firstControllerTop = _c[0], setFirstControllerTop = _c[1];
    var _d = react_1.useState(0), firstControllerBottom = _d[0], setFirstControllerBottom = _d[1];
    var _e = react_1.useState(0), firstControllerLeft = _e[0], setFirstControllerLeft = _e[1];
    var _f = react_1.useState(0), firstControllerWidth = _f[0], setFirstControllerWidth = _f[1];
    // firstOptionsBlock firstBlock
    var _g = react_1.useState("0"), firstBlockIdOption = _g[0], setFirstBlockIdOption = _g[1];
    var _h = react_1.useState(0), firstBlockHeight = _h[0], setFirstBlockHeight = _h[1];
    var _j = react_1.useState(0), firstBlockTop = _j[0], setFirstBlockTop = _j[1];
    var _k = react_1.useState(false), firstBlockVisible = _k[0], setFirstBlockVisible = _k[1];
    // cards
    var cards = [
        {
            icon: "Money",
            subtitle: "Сохранение и приумножение средств вкладчиков и участников"
        },
        {
            icon: "Separation",
            subtitle: "Диверсификация активов"
        },
        {
            icon: "Magnifier",
            subtitle: "Четкий контроль и прозрачность всех операций"
        },
        {
            icon: "Book",
            subtitle: "Соответствие Российским законодательным требованиям и лучшим мировым практикам"
        },
        {
            icon: "Partner",
            subtitle: "Независимость в выборе партнеров – на основе открытых тендеров"
        },
    ];
    var firstArrayOptionsBlock = [
        {
            date: "2021-11-30T09:00:00.000Z",
            value: "2021-11-30T09:00:00.000Z",
            id: "0"
        },
        {
            date: "2021-10-31T09:00:00.000Z",
            value: "2021-10-31T09:00:00.000Z",
            id: "1"
        },
        {
            date: "2021-09-30T09:00:00.000Z",
            value: "2021-09-30T09:00:00.000Z",
            id: "2"
        },
        {
            date: "2021-08-31T09:00:00.000Z",
            value: "2021-08-31T09:00:00.000Z",
            id: "3"
        },
        {
            date: "2021-07-31T09:00:00.000Z",
            value: "2021-07-31T09:00:00.000Z",
            id: "4"
        },
        {
            date: "2021-06-30T09:00:00.000Z",
            value: "2021-06-30T09:00:00.000Z",
            id: "5"
        },
        {
            date: "2021-05-31T09:00:00.000Z",
            value: "2021-05-31T09:00:00.000Z",
            id: "6"
        },
        {
            date: "2021-04-30T09:00:00.000Z",
            value: "2021-04-30T09:00:00.000Z",
            id: "7"
        },
        {
            date: "2021-03-31T09:00:00.000Z",
            value: "2021-03-31T09:00:00.000Z",
            id: "8"
        },
        {
            date: "2021-02-28T09:00:00.000Z",
            value: "2021-02-28T09:00:00.000Z",
            id: "9"
        },
        {
            date: "2021-01-31T09:00:00.000Z",
            value: "2021-01-31T09:00:00.000Z",
            id: "10"
        },
        {
            date: "2020-12-31T09:00:00.000Z",
            value: "2020-12-31T09:00:00.000Z",
            id: "11"
        },
        {
            date: "2020-11-30T09:00:00.000Z",
            value: "2020-11-30T09:00:00.000Z",
            id: "12"
        },
        {
            date: "2020-10-31T09:00:00.000Z",
            value: "2020-10-31T09:00:00.000Z",
            id: "13"
        },
        {
            date: "2020-09-30T09:00:00.000Z",
            value: "2020-09-30T09:00:00.000Z",
            id: "14"
        },
        {
            date: "2020-08-31T09:00:00.000Z",
            value: "2020-08-31T09:00:00.000Z",
            id: "15"
        },
        {
            date: "2020-07-31T09:00:00.000Z",
            value: "2020-07-31T09:00:00.000Z",
            id: "16"
        },
        {
            date: "2020-06-30T09:00:00.000Z",
            value: "2020-06-30T09:00:00.000Z",
            id: "17"
        },
        {
            date: "2020-05-31T09:00:00.000Z",
            value: "2020-05-31T09:00:00.000Z",
            id: "18"
        },
        {
            date: "2020-04-30T09:00:00.000Z",
            value: "2020-04-30T09:00:00.000Z",
            id: "19"
        },
        {
            date: "2020-03-31T09:00:00.000Z",
            value: "2020-03-31T09:00:00.000Z",
            id: "20"
        },
        {
            date: "2020-02-29T09:00:00.000Z",
            value: "2020-02-29T09:00:00.000Z",
            id: "21"
        },
        {
            date: "2020-01-31T09:00:00.000Z",
            value: "2020-01-31T09:00:00.000Z",
            id: "22"
        },
        {
            date: "2019-12-31T09:00:00.000Z",
            value: "2019-12-31T09:00:00.000Z",
            id: "23"
        },
        {
            date: "2019-11-30T09:00:00.000Z",
            value: "2019-11-30T09:00:00.000Z",
            id: "24"
        },
    ];
    var refFirstSelectBlock = react_1.useRef(null);
    react_1.useEffect(function () {
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
    });
    // вызов функции получения высоты блоков опций OptionsBLock при скроллинге
    var scrollHandler = function (event) {
        getOptionsBlockHeight();
    };
    // Получаем значения bottom и left (selectController) из компонента PortfolioStructure.tsx
    // Они нужны для первичного установления координат при useEffect, до вызова scrollHandler
    var getControllerBottomLeft = function (bottom, left) {
        setFirstControllerBottom(bottom);
        setFirstControllerLeft(left);
    };
    // useEffect для первых Controller и OptionsBlock
    react_1.useEffect(function () {
        setFirstBlockTop(firstControllerBottom);
        if (firstControllerBottom <= 0) {
            setFirstBlockTop(0);
        }
        else if (firstControllerBottom >= clientHeight - firstBlockHeight && firstControllerBottom <= clientHeight) {
            setFirstBlockTop(firstControllerBottom - firstBlockHeight);
        }
        else if (firstControllerBottom >= clientHeight) {
            setFirstBlockTop(clientHeight - firstBlockHeight);
        }
    }, [clientHeight, firstBlockHeight, firstControllerBottom]);
    // Клик первого контроллера (first Controller)
    var onClickFirstSelectController = function () {
        setFirstBlockVisible(function (prev) { return !prev; });
        // this.secondSelectionBlock.isVisible = false;
    };
    // получаем клик из OptionsBlock
    var onClickFirstOptionsBlock = function () {
        setFirstBlockVisible(false);
    };
    // получаем изменения выбранного значения из OptionsBlock
    var onChangeFirstOptionsBlock = function (selectionValue, idOption) {
        setFirstSelectionValue(selectionValue);
        setFirstBlockIdOption(idOption);
    };
    // Фунция получения высоты окна браузера.
    var getClientHeight = function () {
        setClientHeight(window.innerHeight);
    };
    // функция получения высоты блоков опций
    var getOptionsBlockHeight = function () {
        if (refFirstSelectBlock.current) {
            setFirstBlockHeight(refFirstSelectBlock.current.getBoundingClientRect().height);
        }
    };
    //  Получаем top, bottom, left, width из компонента PortfolioStructure.tsx при скроллинге
    var onScrollPortfolioStructure = function (top, bottom, left, width) {
        setFirstControllerTop(top);
        setFirstControllerBottom(bottom);
        setFirstControllerLeft(left);
        setFirstControllerWidth(width);
        // Делаем вызов функции
        getClientHeight();
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TopBlock_1["default"], { heading: "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u0430\u044F", headingSpan: "\u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C", subheading: "\u0410\u041E \u041D\u041F\u0424 \u00AB\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441 \u043F\u0435\u043D\u0441\u0438\u0438\u00BB \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0435\u0437\u0435\u0440\u0432\u043E\u0432 \u0432 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0424\u043E\u043D\u0434\u0430 \u043D\u0430 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u0445 \u0441\u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0441\u0442\u0438, \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u0424 \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439", image: InvestTop_jpg_1["default"] }),
        react_1["default"].createElement(Cards_1["default"], { cards: cards }),
        react_1["default"].createElement(PortfolioStructure_1["default"], { ifPressed: firstBlockVisible, controllerValue: firstSelectionValue, idOption: firstBlockIdOption, onClickController: onClickFirstSelectController, emitCoords: onScrollPortfolioStructure, emitControllerBottomLeft: getControllerBottomLeft }),
        react_1["default"].createElement(InvestmentArchive_1["default"], null),
        react_1["default"].createElement(InvestmentDescription_1["default"], null),
        react_1["default"].createElement("div", { ref: refFirstSelectBlock, style: {
                top: firstBlockTop + "px",
                left: firstControllerLeft + 6 + "px",
                width: firstControllerWidth - 12 + "px"
            }, className: firstBlockVisible ? "options-block-visible" : "options-block-hidden" },
            react_1["default"].createElement(OptionsBlock_1["default"], { arrayOptionsBlock: firstArrayOptionsBlock, emitValue: onChangeFirstOptionsBlock, onClickOptionsBlock: onClickFirstOptionsBlock }))));
};
exports["default"] = Investment;
