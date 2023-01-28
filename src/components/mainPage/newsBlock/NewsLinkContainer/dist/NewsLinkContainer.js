"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NewsLink_1 = require("../../../news/NewsLink/NewsLink");
var NewsLinkContainer_module_scss_1 = require("./NewsLinkContainer.module.scss");
var NewsLinkContainer = function (_a) {
    var isClear = _a.isClear, link = _a.link, emitValueWidth = _a.emitValueWidth;
    var _b = react_1.useState(0), width = _b[0], setWidth = _b[1];
    var refNewsLinkContainer = react_1.useRef(null);
    react_1.useEffect(function () {
        if (refNewsLinkContainer.current) {
            setWidth(refNewsLinkContainer.current.offsetWidth);
            // console.log(width);
        }
        emitValueWidth(width);
    }, [emitValueWidth, width]);
    return (react_1["default"].createElement("div", { ref: refNewsLinkContainer, className: isClear ? NewsLinkContainer_module_scss_1["default"]["container__clear"] : NewsLinkContainer_module_scss_1["default"]["container__blurry"] },
        react_1["default"].createElement(NewsLink_1["default"], { date: link.date, title: link.title, id: link.id })));
};
exports["default"] = NewsLinkContainer;
