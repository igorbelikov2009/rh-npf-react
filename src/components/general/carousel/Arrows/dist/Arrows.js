"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Arrows.scss");
var Arrows = function (_a) {
    var isNoCursorLeft = _a.isNoCursorLeft, isBlurredLeft = _a.isBlurredLeft, isNoCursorRight = _a.isNoCursorRight, isBlurredRight = _a.isBlurredRight, onClickLeft = _a.onClickLeft, onClickRight = _a.onClickRight;
    return (react_1["default"].createElement("div", { className: "arrows" },
        react_1["default"].createElement("div", { className: isNoCursorLeft ? "arrows__left-arrow_no-cursor arrows__left-arrow" : "arrows__left-arrow", onClick: onClickLeft },
            react_1["default"].createElement("img", { className: "\r\n                  arrows__left-image arrows__not-visible\r\n                ", src: "/icons/triple/Arrow Right/Colored.svg", alt: "arrow" }),
            react_1["default"].createElement("img", { className: isBlurredLeft ? "arrows__opacity-04 arrows__left-image" : "arrows__left-image", src: "/icons/triple/Arrow Right/Dark.svg", alt: "arrow" })),
        react_1["default"].createElement("div", { className: isNoCursorRight ? "arrows__right-arrow_no-cursor arrows__right-arrow" : "arrows__right-arrow", onClick: onClickRight },
            react_1["default"].createElement("img", { className: "\r\n                  arrows__right-image arrows__not-visible\r\n                ", src: "/icons/triple/Arrow Right/Colored.svg", alt: "arrow" }),
            react_1["default"].createElement("img", { className: isBlurredRight ? "arrows__opacity-04 arrows__right-image" : "arrows__right-image", src: "/icons/triple/Arrow Right/Dark.svg", alt: "arrow" }))));
};
exports["default"] = Arrows;
