"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SpecDepositoryBlock_module_scss_1 = require("./SpecDepositoryBlock.module.scss");
var SpecDepositoryBlock = function (_a) {
    var subheading = _a.subheading, title = _a.title, subtitle = _a.subtitle;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", { className: SpecDepositoryBlock_module_scss_1["default"]["spec-depository__paragraph"] },
            react_1["default"].createElement("span", { className: SpecDepositoryBlock_module_scss_1["default"]["spec-depository__subheading"] },
                " ",
                subheading,
                " "),
            react_1["default"].createElement("span", { className: SpecDepositoryBlock_module_scss_1["default"]["spec-depository__title"] },
                " ",
                title,
                " ")),
        react_1["default"].createElement("p", { className: SpecDepositoryBlock_module_scss_1["default"]["spec-depository__paragraph"] },
            react_1["default"].createElement("span", { className: SpecDepositoryBlock_module_scss_1["default"]["spec-depository__title"] },
                " ",
                subtitle,
                " "))));
};
exports["default"] = SpecDepositoryBlock;
