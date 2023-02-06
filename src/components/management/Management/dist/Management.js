"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_1 = require("../../general/DarkIcon/DarkIcon");
var MyLink_1 = require("../../ui/links/MyLink/MyLink");
var AuditCommittee_1 = require("../AuditCommittee/AuditCommittee");
var BoardOfDirectors_1 = require("../BoardOfDirectors/BoardOfDirectors");
var ChiefAccountant_1 = require("../ChiefAccountant/ChiefAccountant");
var Controller_1 = require("../Controller/Controller");
var GeneralMeetingOfShareholders_1 = require("../GeneralMeetingOfShareholders/GeneralMeetingOfShareholders");
var GoverningBody_1 = require("../GoverningBody/GoverningBody");
var Team_1 = require("../Team/Team");
require("./Management.scss");
var Management = function () {
    var block1 = react_1.useRef(null);
    var block2 = react_1.useRef(null);
    var block3 = react_1.useRef(null);
    var block4 = react_1.useRef(null);
    var block5 = react_1.useRef(null);
    var block6 = react_1.useRef(null);
    var block7 = react_1.useRef(null);
    var refBbarContainer = react_1.useRef(null);
    var _a = react_1.useState(0), barContainerTop = _a[0], setBarContainerTop = _a[1];
    var _b = react_1.useState(true), barNavAbsolute = _b[0], setBarNavAbsolute = _b[1];
    var _c = react_1.useState(0), iconTop = _c[0], setIconTop = _c[1];
    var _d = react_1.useState(false), isActive = _d[0], setActive = _d[1];
    var _e = react_1.useState(552), h00 = _e[0], setH00 = _e[1];
    var _f = react_1.useState(0), h01 = _f[0], setH01 = _f[1];
    var _g = react_1.useState(0), h02 = _g[0], setH02 = _g[1];
    var _h = react_1.useState(0), h03 = _h[0], setH03 = _h[1];
    var _j = react_1.useState(0), h04 = _j[0], setH04 = _j[1];
    var _k = react_1.useState(0), h05 = _k[0], setH05 = _k[1];
    var _l = react_1.useState(0), h06 = _l[0], setH06 = _l[1];
    var _m = react_1.useState(0), h07 = _m[0], setH07 = _m[1];
    var _o = react_1.useState(0), scrollY = _o[0], setScrollY = _o[1];
    var myLinks = [
        { href: "#governingBody", children: "Правление" },
        { href: "#boardOfDirectors", children: "Совет директоров" },
        { href: "#team", children: "Команда" },
        { href: "#auditCommittee", children: "Ревизионная комиссия" },
        { href: "#chiefAccountant", children: "Главный бухгалтер" },
        { href: "#controller", children: "Контролер" },
        { href: "#generalMeetingOfShareholders", children: "Собрание акционеров" },
    ];
    react_1.useEffect(function () {
        getTopBarContainer();
        changeStyleBarNav();
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [barContainerTop]);
    var scrollHandler = function (event) {
        getTopBarContainer();
        getTopAllComponents();
        setScrollY(window.scrollY);
        getIconTop();
    };
    // console.log(scrollY);
    var getTopBarContainer = function () {
        if (refBbarContainer.current) {
            setBarContainerTop(refBbarContainer.current.getBoundingClientRect().top);
        }
    };
    // console.log(barContainerTop);
    var changeStyleBarNav = function () {
        if (barContainerTop > 0) {
            setBarNavAbsolute(true);
        }
        else {
            setBarNavAbsolute(false);
        }
    };
    // console.log(barNavAbsolute);
    var getTopAllComponents = function () {
        if (block1.current) {
            setH01(block1.current.getBoundingClientRect().height);
        }
        // console.log(h01);
        if (block2.current) {
            setH02(block2.current.getBoundingClientRect().height);
        }
        // console.log(h02);
        if (block3.current) {
            setH03(block3.current.getBoundingClientRect().height);
        }
        // console.log(h03);
        if (block4.current) {
            setH04(block4.current.getBoundingClientRect().height);
        }
        // console.log(h04);
        if (block5.current) {
            setH05(block5.current.getBoundingClientRect().height);
        }
        // console.log(h05);
        if (block6.current) {
            setH06(block6.current.getBoundingClientRect().height);
        }
        // console.log(h06);
        if (block7.current) {
            setH07(block7.current.getBoundingClientRect().height);
        }
        // console.log(h07);
    };
    var getIconTop = function () {
        if (scrollY >= 552 && scrollY < 552 + h01) {
            // console.log('01');
            setIconTop(0);
        }
        else if (scrollY >= 552 + h01 && scrollY < 552 + h01 + h02) {
            // console.log('02');
            setIconTop(1);
        }
        else if (scrollY >= 552 + h01 + h02 && scrollY < 552 + h01 + h02 + h03) {
            // console.log('03');
            setIconTop(2);
        }
        else if (scrollY >= 552 + h01 + h02 + h03 && scrollY < 552 + h01 + h02 + h03 + h04) {
            // console.log('04');
            setIconTop(3);
        }
        else if (scrollY >= 552 + h01 + h02 + h03 + h04 && scrollY < 552 + h01 + h02 + h03 + h04 + h05) {
            // console.log('05');
            setIconTop(4);
        }
        else if (scrollY >= 552 + h01 + h02 + h03 + h04 + h05 && scrollY < 552 + h01 + h02 + h03 + h04 + h05 + h06 - 21) {
            // console.log('06');
            // console.log(552 + h01 + h02 + h03 + h04 + h05);
            // console.log(552 + h01 + h02 + h03 + h04 + h05 + h06 - 19);
            setIconTop(5);
        }
        else if (scrollY >= 552 + h01 + h02 + h03 + h04 + h05 + h06 - 21 &&
            scrollY < 552 + h01 + h02 + h03 + h04 + h05 + h06 + h07) {
            // console.log('07');
            setIconTop(6);
        }
    };
    return (react_1["default"].createElement("section", { className: "management" },
        react_1["default"].createElement("div", { className: "management__container" },
            react_1["default"].createElement("div", { className: "management__content" },
                react_1["default"].createElement("div", { className: "management__department", id: "governingBody", ref: block1 },
                    react_1["default"].createElement(GoverningBody_1["default"], null)),
                react_1["default"].createElement("div", { className: "management__department", id: "boardOfDirectors", ref: block2 },
                    react_1["default"].createElement(BoardOfDirectors_1["default"], null)),
                react_1["default"].createElement("div", { className: "management__department", id: "team", ref: block3 },
                    react_1["default"].createElement(Team_1["default"], null)),
                react_1["default"].createElement("div", { className: "management__department", id: "auditCommittee", ref: block4 },
                    react_1["default"].createElement(AuditCommittee_1["default"], null)),
                react_1["default"].createElement("div", { className: "management__department", id: "chiefAccountant", ref: block5 },
                    react_1["default"].createElement(ChiefAccountant_1["default"], null)),
                react_1["default"].createElement("div", { className: "management__department", id: "controller", ref: block6 },
                    react_1["default"].createElement(Controller_1["default"], null)),
                react_1["default"].createElement("div", { className: "management__department", id: "generalMeetingOfShareholders", ref: block7 },
                    react_1["default"].createElement(GeneralMeetingOfShareholders_1["default"], null))),
            react_1["default"].createElement("div", { className: "management__bar-container", ref: refBbarContainer },
                react_1["default"].createElement("aside", { className: barNavAbsolute ? "management__bar-nav_absolute" : "management__bar-nav_fixed" },
                    react_1["default"].createElement("div", { className: "management__bar-icon", style: { top: iconTop * 48 + "px" } },
                        react_1["default"].createElement(DarkIcon_1["default"], { icon: "Arrow Down" })),
                    myLinks.map(function (link, index) { return (react_1["default"].createElement(MyLink_1["default"], { key: index, href: link.href, children: link.children, isActive: false })); }))))));
};
exports["default"] = Management;
