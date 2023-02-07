"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TopBlock_1 = require("../components/general/TopBlock");
var infoTop_jpg_1 = require("../assets/images/info/infoTop.jpg");
var GeneralInfo_1 = require("../components/infoDisclosure/GeneralInfo/GeneralInfo");
require("../styles/dist/InfoDisclosurePage.css");
var InfoDisclosurePage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TopBlock_1["default"], { heading: "\u0420\u0430\u0441\u043A\u0440\u044B\u0442\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438", image: infoTop_jpg_1["default"] }),
        react_1["default"].createElement(GeneralInfo_1["default"], null)));
};
exports["default"] = InfoDisclosurePage;
