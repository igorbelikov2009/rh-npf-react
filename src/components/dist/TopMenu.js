"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../styles/TopMenu.scss");
var react_router_dom_1 = require("react-router-dom");
var Logotypes_1 = require("./general/Logotypes/Logotypes");
var MenuLink_1 = require("./ui/links/MenuLink/MenuLink");
var TripleIcon_1 = require("./general/TripleIcon/TripleIcon");
var TopMenu = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState(false), isBackgroundWhite = _a[0], setIsBackgroundWhite = _a[1];
    var _b = react_1.useState(false), isPrivateOfficeHovered = _b[0], setPrivateOfficeHovered = _b[1];
    var _c = react_1.useState(false), isHamburgerHovered = _c[0], setHamburgerHovered = _c[1];
    var pathname = react_router_dom_1.useLocation().pathname;
    // console.log(pathname);
    var TopMenuLinks = [
        { to: "/about", children: "О нас" },
        { to: "/investment", children: "Инвестиции" },
        { to: "/business", children: "Для бизнеса" },
        { to: "/news", children: "Новости" },
        { to: "/support", children: "Поддержка" },
        { to: "/contacts", children: "Контакты" },
    ];
    react_1.useEffect(function () {
        if (pathname === "/" ||
            pathname === "/about" ||
            pathname === "/business" ||
            pathname === "/info" ||
            pathname === "/investment" ||
            pathname === "/managment" ||
            pathname === "/news" ||
            pathname === "/notfoundpage" ||
            pathname === "/support" ||
            pathname === "/taxation") {
            setIsBackgroundWhite(false);
        }
        else {
            setIsBackgroundWhite(true);
        }
    }, [pathname]);
    return (react_1["default"].createElement("header", { className: isBackgroundWhite ? "top-menu top-menu__with-border" : "top-menu " },
        react_1["default"].createElement("div", { className: "top-menu__container" },
            react_1["default"].createElement("div", { className: "top-menu__left-block" },
                react_1["default"].createElement("div", { onMouseOver: function () { return setHamburgerHovered(true); }, onMouseOut: function () { return setHamburgerHovered(false); }, className: "top-menu__hamburger" },
                    react_1["default"].createElement(TripleIcon_1["default"], { icon: "Hamburger", light: !isBackgroundWhite, hovered: isHamburgerHovered })),
                react_1["default"].createElement("div", { onClick: function () { return navigate("/", { replace: true }); } },
                    react_1["default"].createElement(Logotypes_1["default"], { isBackgroundWhite: isBackgroundWhite })),
                react_1["default"].createElement("div", { className: "top-menu__nav" }, TopMenuLinks.map(function (link) { return (react_1["default"].createElement(MenuLink_1["default"], { key: link.to, to: link.to, isBackgroundWhite: isBackgroundWhite }, link.children)); }))),
            react_1["default"].createElement("div", { className: "top-menu__right-block" },
                react_1["default"].createElement("div", { className: "top-menu__contacts" },
                    react_1["default"].createElement("div", { className: "top-menu__phone" },
                        react_1["default"].createElement("a", { className: isBackgroundWhite ? "top-menu__link  top-menu__link_news" : "top-menu__link", href: "tel:+78002004766" }, "8 800 200-47-66"))),
                react_1["default"].createElement("div", { onMouseOver: function () { return setPrivateOfficeHovered(true); }, onMouseOut: function () { return setPrivateOfficeHovered(false); }, className: "top-menu__private-office" },
                    react_1["default"].createElement(TripleIcon_1["default"], { icon: "User", light: !isBackgroundWhite, hovered: isPrivateOfficeHovered }),
                    react_1["default"].createElement("p", { className: isBackgroundWhite ? "top-menu__title  top-menu__title_news" : "top-menu__title" }, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"))))));
};
exports["default"] = TopMenu;
