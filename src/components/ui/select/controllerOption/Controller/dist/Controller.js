"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Controller_module_scss_1 = require("./Controller.module.scss");
var Controller = function (_a) {
    var value = _a.value, isVisible = _a.isVisible, onClickController = _a.onClickController;
    return (react_1["default"].createElement("div", { className: Controller_module_scss_1["default"]["controller"] },
        react_1["default"].createElement("div", { className: Controller_module_scss_1["default"]["changing-title"] },
            react_1["default"].createElement("div", { className: isVisible ? Controller_module_scss_1["default"]["border_gray"] : Controller_module_scss_1["default"]["border_white"] },
                react_1["default"].createElement("div", { className: isVisible ? Controller_module_scss_1["default"]["container_backgr-gray"] : Controller_module_scss_1["default"]["container_backgr-white"], onClick: onClickController },
                    react_1["default"].createElement("div", { className: Controller_module_scss_1["default"]["controller-date"] },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("p", { className: Controller_module_scss_1["default"]["controller-date"] }, value))),
                    react_1["default"].createElement("div", { className: Controller_module_scss_1["default"]["icon"] },
                        react_1["default"].createElement("img", { className: isVisible ? Controller_module_scss_1["default"]["image_rotate-180"] : Controller_module_scss_1["default"]["image_rotate-0"], src: "/icons/triple/Arrow Down/Dark.svg", alt: "Arrow Down" }))),
                react_1["default"].createElement("div", { className: isVisible ? Controller_module_scss_1["default"]["white-line_height-2"] : Controller_module_scss_1["default"]["white-line_height-1"] },
                    react_1["default"].createElement("div", { className: isVisible ? Controller_module_scss_1["default"]["black-line_width-0"] : Controller_module_scss_1["default"]["black-line_width-50"] }),
                    react_1["default"].createElement("div", { className: isVisible ? Controller_module_scss_1["default"]["black-line_width-0"] : Controller_module_scss_1["default"]["black-line_width-50"] }))))));
};
exports["default"] = Controller;
