"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SidebarLink_module_scss_1 = require("./SidebarLink.module.scss");
var SidebarLink = function (_a) {
    var itemName = _a.itemName, isActive = _a.isActive;
    var _b = react_1.useState(null), anchorTarget = _b[0], setAnchorTarget = _b[1];
    react_1.useEffect(function () {
        setAnchorTarget(document.getElementById(itemName));
    }, [itemName]);
    var handleClick = function (event) {
        event.preventDefault();
        if (anchorTarget) {
            anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (react_1["default"].createElement("li", { className: SidebarLink_module_scss_1["default"].li },
        react_1["default"].createElement("a", { href: "#" + itemName, onClick: handleClick, className: isActive ? SidebarLink_module_scss_1["default"]["link_active"] : SidebarLink_module_scss_1["default"]["link"] }, itemName)));
};
exports["default"] = SidebarLink;
