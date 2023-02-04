"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ExpandingPanel_1 = require("../ExpandingPanel/ExpandingPanel");
var ExpandingAnswer_module_scss_1 = require("./ExpandingAnswer.module.scss");
var ExpandingAnswer = function (_a) {
    var question = _a.question, answer = _a.answer;
    var _b = react_1.useState(false), isVisible = _b[0], setVisible = _b[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: ExpandingAnswer_module_scss_1["default"]["expanding"] },
        react_1["default"].createElement(ExpandingPanel_1["default"], { isContentVisible: isVisible, panelName: question, onClickExpanding: expanderHandler }),
        isVisible && (react_1["default"].createElement("div", { className: isVisible ? ExpandingAnswer_module_scss_1["default"]["expanding__content-enter-active"] : ExpandingAnswer_module_scss_1["default"]["expanding__content-leave-active"] },
            react_1["default"].createElement("div", { className: ExpandingAnswer_module_scss_1["default"]["expanding__content"] }, answer.map(function (paragraph, index) { return (react_1["default"].createElement("p", { key: index, className: ExpandingAnswer_module_scss_1["default"]["expanding__paragraph"] }, paragraph)); }))))));
};
exports["default"] = ExpandingAnswer;
