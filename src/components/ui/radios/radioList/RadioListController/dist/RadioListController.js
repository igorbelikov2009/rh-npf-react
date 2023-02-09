"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./RadioListController.scss");
var RadioListController = function (_a) {
    var value = _a.value, isVisible = _a.isVisible, radioItems = _a.radioItems, onClickController = _a.onClickController;
    return (react_1["default"].createElement("div", { className: "radio-list-controller" },
        react_1["default"].createElement("div", { className: "radio-list-controller__changing-title" },
            react_1["default"].createElement("div", { className: isVisible ? "radio-list-controller__border_gray" : "radio-list-controller__border_white" },
                react_1["default"].createElement("div", { className: isVisible
                        ? "radio-list-controller__container_backgr-gray"
                        : "radio-list-controller__container_backgr-white", onClick: onClickController },
                    react_1["default"].createElement("div", { className: "radio-list-controller__controller-date" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("p", { className: "radio-list-controller-date" }, value))),
                    react_1["default"].createElement("div", { className: "radio-list-controller__icon" },
                        react_1["default"].createElement("img", { className: isVisible ? "radio-list-controller__image_rotate-180" : "radio-list-controller__image_rotate-0", src: "/icons/triple/Arrow Down/Dark.svg", alt: "Arrow Down" }))),
                react_1["default"].createElement("div", { className: isVisible ? "radio-list-controller__white-line_height-2" : "radio-list-controller__white-line_height-1" },
                    react_1["default"].createElement("div", { className: isVisible ? "radio-list-controller__black-line_width-0" : "radio-list-controller__black-line_width-50" }),
                    react_1["default"].createElement("div", { className: isVisible ? "radio-list-controller__black-line_width-0" : "radio-list-controller__black-line_width-50" }))))));
};
exports["default"] = RadioListController;
