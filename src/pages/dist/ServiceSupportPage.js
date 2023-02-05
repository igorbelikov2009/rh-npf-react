"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TopBlock_1 = require("../components/general/TopBlock");
var supportTop_jpg_1 = require("../assets/images/support/supportTop.jpg");
require("../styles/dist/ServiceSupport.css");
var QuestionsAnswers_1 = require("../components/serviceSupport/QuestionsAnswers/QuestionsAnswers");
var PensionPrograms_1 = require("../components/serviceSupport/PensionPrograms/PensionPrograms");
var ServiceSupportPage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TopBlock_1["default"], { heading: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430", image: supportTop_jpg_1["default"] }),
        react_1["default"].createElement("div", { className: "support-servise-page" },
            react_1["default"].createElement(QuestionsAnswers_1["default"], null),
            react_1["default"].createElement(PensionPrograms_1["default"], null))));
};
exports["default"] = ServiceSupportPage;
