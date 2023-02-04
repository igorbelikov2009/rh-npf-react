"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Paragraph_1 = require("../../paragraphs/Paragraph/Paragraph");
var ParagraphBefore_1 = require("../../paragraphs/ParagraphBefore/ParagraphBefore");
var ExpandingPanel_1 = require("../ExpandingPanel/ExpandingPanel");
var ExpandingAnswer_module_scss_1 = require("./ExpandingAnswer.module.scss");
var ExpandingAnswer = function (_a) {
    var question = _a.question, answer = _a.answer, isParagraph = _a.isParagraph, isParagraphBefore = _a.isParagraphBefore;
    var _b = react_1.useState(false), isVisible = _b[0], setVisible = _b[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: ExpandingAnswer_module_scss_1["default"]["expanding"] },
        react_1["default"].createElement(ExpandingPanel_1["default"], { isContentVisible: isVisible, panelName: question, onClickExpanding: expanderHandler }),
        isVisible && (react_1["default"].createElement("div", { className: isVisible ? ExpandingAnswer_module_scss_1["default"]["expanding__content-enter-active"] : ExpandingAnswer_module_scss_1["default"]["expanding__content-leave-active"] },
            isParagraph && (react_1["default"].createElement("div", { className: ExpandingAnswer_module_scss_1["default"]["expanding__content"] },
                react_1["default"].createElement(Paragraph_1["default"], { paragraphs: answer }))),
            isParagraphBefore && (react_1["default"].createElement("div", { className: ExpandingAnswer_module_scss_1["default"]["expanding__content"] },
                react_1["default"].createElement(ParagraphBefore_1["default"], { paragraphs: answer })))))));
};
exports["default"] = ExpandingAnswer;
