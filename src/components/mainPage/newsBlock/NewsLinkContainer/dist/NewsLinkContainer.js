"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NewsLink_1 = require("../../../news/NewsLink/NewsLink");
var NewsLinkContainer_module_scss_1 = require("./NewsLinkContainer.module.scss");
var NewsLinkContainer = function (_a) {
    var isClear = _a.isClear, link = _a.link;
    var _b = react_1.useState(0), linkContainerWidth = _b[0], setLinkContainerWidth = _b[1];
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        setLinkContainerWidth(ref.current ? ref.current.offsetWidth : 0);
        console.log(linkContainerWidth);
    }, []);
    return (react_1["default"].createElement("div", { ref: ref, className: isClear ? NewsLinkContainer_module_scss_1["default"]["container__clear"] : NewsLinkContainer_module_scss_1["default"]["container__blurry"] },
        react_1["default"].createElement(NewsLink_1["default"], { date: link.date, title: link.title, id: link.id })));
};
exports["default"] = NewsLinkContainer;
