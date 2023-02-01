"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TopBlock_1 = require("../components/general/TopBlock");
var InvestTop_jpg_1 = require("../assets/images/invest/InvestTop.jpg");
var Cards_1 = require("../components/general/cards/Cards/Cards");
var InvestmentDescription_1 = require("../components/investment/InvestmentDescription/InvestmentDescription");
var InvestmentArchive_1 = require("../components/investment/InvestmentArchive/InvestmentArchive");
var PortfolioStructure_1 = require("../components/investment/portfolioStructure/PortfolioStructure/PortfolioStructure");
var Investment = function () {
    var _a = react_1.useState(0), clientHeight = _a[0], setClientHeight = _a[1];
    var _b = react_1.useState("30 November 2021 г."), firstSelectionValue = _b[0], setFirstSelectionValue = _b[1];
    // firstSelectController: coords
    var _c = react_1.useState(0), firstTop = _c[0], setFirstTop = _c[1];
    var _d = react_1.useState(0), firstBottom = _d[0], setFirstBottom = _d[1];
    var _e = react_1.useState(0), firstLeft = _e[0], setFirstLeft = _e[1];
    var _f = react_1.useState(0), firstWidth = _f[0], setFirstWidth = _f[1];
    var _g = react_1.useState(0), firstHeight = _g[0], seFirsttHeight = _g[1];
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
    var firstSelectionBlock = {
        idOptions: 0,
        height: 0,
        top: 0,
        isVisible: false
    };
    var onClickFirstSelectController = function () {
        // this.firstSelectionBlock.isVisible = !this.firstSelectionBlock.isVisible;
        // this.secondSelectionBlock.isVisible = false;
        // this.firstSelectionBlock.top = this.firstSelectController.bottom;
    };
    var getClientHeight = function () {
        setClientHeight(document.documentElement.clientHeight);
    };
    // getSelectionBlockHeight() {
    //   const selectionOptionBlock = this.$refs.firstSelectionBlock;
    //   this.commonSelectionBlocks.height = Math.round(
    //     selectionOptionBlock.getBoundingClientRect().height
    //   );
    // };
    var onScrollPortfolioStructure = function (top, bottom, left, width, height) {
        // this.getFirstSelectionBlockCoordsTop();
        setFirstTop(top);
        setFirstBottom(bottom);
        setFirstLeft(left);
        setFirstWidth(width);
        seFirsttHeight(height);
        getClientHeight();
    };
    console.log(firstTop, firstBottom, firstLeft, firstWidth, firstHeight, clientHeight);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TopBlock_1["default"], { heading: "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u0430\u044F", headingSpan: "\u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C", subheading: "\u0410\u041E \u041D\u041F\u0424 \u00AB\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441 \u043F\u0435\u043D\u0441\u0438\u0438\u00BB \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0435\u0437\u0435\u0440\u0432\u043E\u0432 \u0432 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0424\u043E\u043D\u0434\u0430 \u043D\u0430 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u0445 \u0441\u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0441\u0442\u0438, \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u0424 \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439", image: InvestTop_jpg_1["default"] }),
        react_1["default"].createElement(Cards_1["default"], { cards: cards }),
        react_1["default"].createElement(PortfolioStructure_1["default"], { ifPressed: firstSelectionBlock.isVisible, controllerValue: firstSelectionValue, idOptions: firstSelectionBlock.idOptions, onClickController: onClickFirstSelectController, emitCoords: onScrollPortfolioStructure }),
        react_1["default"].createElement(InvestmentArchive_1["default"], null),
        react_1["default"].createElement(InvestmentDescription_1["default"], null)));
};
exports["default"] = Investment;
