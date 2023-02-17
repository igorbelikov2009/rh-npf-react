"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Arrows.scss");
var Arrows = function (_a) {
    var isNoCursorLeft = _a.isNoCursorLeft, isBlurredLeft = _a.isBlurredLeft, isNoCursorRight = _a.isNoCursorRight, isBlurredRight = _a.isBlurredRight, onClickLeft = _a.onClickLeft, onClickRight = _a.onClickRight;
    return (react_1["default"].createElement("div", { className: "arrows" },
        react_1["default"].createElement("div", { className: isNoCursorLeft ? "arrows__left-arrow_cursor-default" : "arrows__left-arrow_cursor-pointer", onClick: onClickLeft },
            react_1["default"].createElement("img", { className: "arrows__left-image", src: "/icons/triple/Arrow Right/Colored.svg", alt: "arrow" }),
            react_1["default"].createElement("img", { className: isBlurredLeft ? "arrows__left-image_opacity-04" : "arrows__left-image_opacity-1", src: "/icons/triple/Arrow Right/Dark.svg", alt: "arrow" })),
        react_1["default"].createElement("div", { className: isNoCursorRight ? "arrows__right-arrow_cursor-default" : "arrows__right-arrow_cursor-pointer", onClick: onClickRight },
            react_1["default"].createElement("img", { className: "arrows__right-image", src: "/icons/triple/Arrow Right/Colored.svg", alt: "arrow" }),
            react_1["default"].createElement("img", { className: isBlurredRight ? "arrows__right-image_opacity-04" : "arrows__right-image_opacity-1", src: "/icons/triple/Arrow Right/Dark.svg", alt: "arrow" }))));
};
exports["default"] = Arrows;
