"use strict";
exports.__esModule = true;
var react_1 = require("react");
var investPercentsAPI_1 = require("../../../../services/investPercentsAPI");
var Controller_1 = require("../../../ui/select/Controller/Controller");
var Graph_1 = require("../Graph/Graph");
var Percents_1 = require("../Percents/Percents");
var PortfolioStructure_module_scss_1 = require("./PortfolioStructure.module.scss");
var PortfolioStructure = function (_a) {
    var ifPressed = _a.ifPressed, controllerValue = _a.controllerValue, idOption = _a.idOption, onClickController = _a.onClickController, emitCoords = _a.emitCoords, emitControllerBottomLeft = _a.emitControllerBottomLeft;
    var _b = react_1.useState(0), top = _b[0], setTop = _b[1];
    var _c = react_1.useState(0), bottom = _c[0], setBottom = _c[1];
    var _d = react_1.useState(0), left = _d[0], setLeft = _d[1];
    var _e = react_1.useState(0), width = _e[0], setWidth = _e[1];
    var selectController = react_1.useRef(null);
    // Получаем данные с сервера
    var investPercents = investPercentsAPI_1.investPercentsAPI.useGetInvestPercentsQuery().data;
    var getSelectControllerCoords = function () {
        if (selectController.current) {
            setTop(selectController.current.getBoundingClientRect().top);
            setBottom(selectController.current.getBoundingClientRect().bottom);
            setLeft(selectController.current.getBoundingClientRect().left);
            setWidth(selectController.current.getBoundingClientRect().width);
            emitCoords(top, bottom, left, width);
        }
    };
    react_1.useEffect(function () {
        if (selectController.current) {
            setBottom(selectController.current.getBoundingClientRect().bottom);
            setLeft(selectController.current.getBoundingClientRect().left);
            emitControllerBottomLeft(bottom, left);
        }
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [top]);
    var scrollHandler = function (event) {
        getSelectControllerCoords();
    };
    return (react_1["default"].createElement("section", { className: PortfolioStructure_module_scss_1["default"]["portfolie-structure"] },
        react_1["default"].createElement("h1", { className: PortfolioStructure_module_scss_1["default"]["portfolie-structure__heading"] }, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u044F"),
        react_1["default"].createElement("div", { className: PortfolioStructure_module_scss_1["default"]["portfolie-structure__selection"], ref: selectController },
            react_1["default"].createElement(Controller_1["default"], { ifPressed: ifPressed, value: controllerValue, onClickController: onClickController })),
        react_1["default"].createElement("div", { className: PortfolioStructure_module_scss_1["default"]["portfolie-structure__content"] },
            react_1["default"].createElement(Graph_1["default"], null),
            investPercents &&
                investPercents.map(function (block, index) { return (react_1["default"].createElement(Percents_1["default"], { key: index, percent01: block.percent01, percent02: block.percent02, percent03: block.percent03, percent04: block.percent04, percent05: block.percent05, percent06: block.percent06, isVisible: Number(idOption) === index })); }))));
};
exports["default"] = PortfolioStructure;
