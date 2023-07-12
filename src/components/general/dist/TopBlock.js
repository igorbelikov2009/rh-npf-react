"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../../styles/TopBlock.scss");
var TopBlock = function (_a) {
    var heading = _a.heading, headingSpan = _a.headingSpan, subheading = _a.subheading, subheadingSpan = _a.subheadingSpan, image = _a.image;
    return (react_1["default"].createElement("section", { className: "top-block", style: { backgroundImage: "url(" + image + ")" } },
        react_1["default"].createElement("div", { className: "top-block__container" },
            react_1["default"].createElement("h1", { className: "top-block__heading" },
                heading,
                react_1["default"].createElement("span", { className: "top-block__heading_span" },
                    " ",
                    headingSpan,
                    " ")),
            react_1["default"].createElement("h2", { className: "top-block__subheading" },
                subheading,
                react_1["default"].createElement("span", { className: "top-block__subheading_span" }, subheadingSpan)))));
};
exports["default"] = TopBlock;
