"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Arrows_1 = require("../Arrows/Arrows");
var CarouselHeader_module_scss_1 = require("./CarouselHeader.module.scss");
var CarouselHeader = function (_a) {
    var headerTitle = _a.headerTitle, headerSubtitle = _a.headerSubtitle, isBlurredLeft = _a.isBlurredLeft, isBlurredRight = _a.isBlurredRight, isNoCursorLeft = _a.isNoCursorLeft, isNoCursorRight = _a.isNoCursorRight, onClickLeft = _a.onClickLeft, onClickRight = _a.onClickRight;
    return (react_1["default"].createElement("section", { className: CarouselHeader_module_scss_1["default"]["carousel-header"] },
        react_1["default"].createElement("div", { className: CarouselHeader_module_scss_1["default"]["carousel-header__headings"] },
            react_1["default"].createElement("h1", { "v-if": "ifHasHeaderTitle", className: CarouselHeader_module_scss_1["default"]["carousel-header__title"] }, headerTitle),
            react_1["default"].createElement("p", { "v-if": "ifHasHeaderSubtitle", className: CarouselHeader_module_scss_1["default"]["carousel-header__subtitle"] }, headerSubtitle),
            react_1["default"].createElement(Arrows_1["default"], { isBlurredLeft: isBlurredLeft, isBlurredRight: isBlurredRight, isNoCursorLeft: isNoCursorLeft, isNoCursorRight: isNoCursorRight, onClickLeft: onClickLeft, onClickRight: onClickRight }))));
};
exports["default"] = CarouselHeader;
