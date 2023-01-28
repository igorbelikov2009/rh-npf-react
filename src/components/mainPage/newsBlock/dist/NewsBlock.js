"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var CarouselHeader_1 = require("../../general/carousel/CarouselHeader/CarouselHeader");
var NewsBlock_module_scss_1 = require("./NewsBlock.module.scss");
var NewsBlock = function () {
    var _a = react_1.useState(true), isNoCursorLeft = _a[0], setIsNoCursorLeft = _a[1];
    var _b = react_1.useState(true), isBlurredLeft = _b[0], setIsBlurredLeft = _b[1];
    var _c = react_1.useState(false), isNoCursorRight = _c[0], setIsNoCursorRight = _c[1];
    var _d = react_1.useState(false), isBlurredRight = _d[0], setIsBlurredRight = _d[1];
    var onClickLeftArrow = function () { };
    var onClickRightArrow = function () { };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(CarouselHeader_1["default"], { headerTitle: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438", isBlurredLeft: isBlurredLeft, isBlurredRight: isBlurredRight, isNoCursorLeft: isNoCursorLeft, isNoCursorRight: isNoCursorRight, onClickLeft: onClickLeftArrow, onClickRight: onClickRightArrow }),
        react_1["default"].createElement("div", { className: NewsBlock_module_scss_1["default"]["carousel"] },
            react_1["default"].createElement("div", { className: NewsBlock_module_scss_1["default"]["carousel-tape"] }))));
};
exports["default"] = NewsBlock;
