"use strict";
exports.__esModule = true;
var react_1 = require("react");
var investmentTablesAPI_1 = require("../../../../services/investmentTablesAPI");
var Controller_1 = require("../../../ui/select/Controller/Controller");
var CompositionBlock_1 = require("../CompositionBlock/CompositionBlock");
var CompositionReserves_module_scss_1 = require("./CompositionReserves.module.scss");
var CompositionReserves = function (_a) {
    var ifPressed = _a.ifPressed, controllerValue = _a.controllerValue, idOption = _a.idOption, onClickController = _a.onClickController, emitCoords = _a.emitCoords, emitControllerBottomLeft = _a.emitControllerBottomLeft;
    // Получаем данные с сервера
    var investmentTables = investmentTablesAPI_1.investmentTablesAPI.useGetInvestmentTablesQuery().data;
    var _b = react_1.useState(0), top = _b[0], setTop = _b[1];
    var _c = react_1.useState(0), bottom = _c[0], setBottom = _c[1];
    var _d = react_1.useState(0), left = _d[0], setLeft = _d[1];
    var _e = react_1.useState(0), width = _e[0], setWidth = _e[1];
    var selectController = react_1.useRef(null);
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
    return (react_1["default"].createElement("section", { className: CompositionReserves_module_scss_1["default"]["composition-of-funds"] },
        react_1["default"].createElement("h1", { className: CompositionReserves_module_scss_1["default"]["composition-of-funds__heading"] }, "\u0421\u043E\u0441\u0442\u0430\u0432 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0435\u0437\u0435\u0440\u0432\u043E\u0432 \u0424\u043E\u043D\u0434\u0430"),
        react_1["default"].createElement("div", { className: CompositionReserves_module_scss_1["default"]["composition-of-funds__selection"], ref: selectController },
            react_1["default"].createElement(Controller_1["default"], { ifPressed: ifPressed, value: controllerValue, onClickController: onClickController })),
        investmentTables &&
            investmentTables.map(function (arrayOfExpanderTables, index) { return (react_1["default"].createElement(CompositionBlock_1["default"], { key: index, arrayOfExpanderTables: arrayOfExpanderTables, isVisible: index === Number(idOption) })); })));
};
exports["default"] = CompositionReserves;
