"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_1 = require("../../general/DarkIcon/DarkIcon");
var AuditCommittee_1 = require("../AuditCommittee/AuditCommittee");
var BoardOfDirectors_1 = require("../BoardOfDirectors/BoardOfDirectors");
var ChiefAccountant_1 = require("../ChiefAccountant/ChiefAccountant");
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
    var barContainer = react_1.useRef(null);
    var _a = react_1.useState(0), barContainerTop = _a[0], setBarContainerTop = _a[1];
    var _b = react_1.useState(true), barNavAbsolute = _b[0], setBarNavAbsolute = _b[1];
    var _c = react_1.useState(0), iconTop = _c[0], setIconTop = _c[1];
    var _d = react_1.useState(552), h00 = _d[0], setH00 = _d[1];
    var _e = react_1.useState(0), h01 = _e[0], setH01 = _e[1];
    var _f = react_1.useState(0), h02 = _f[0], setH02 = _f[1];
    var _g = react_1.useState(0), h03 = _g[0], setH03 = _g[1];
    var _h = react_1.useState(0), h04 = _h[0], setH04 = _h[1];
    var _j = react_1.useState(0), h05 = _j[0], setH05 = _j[1];
    var _k = react_1.useState(0), h06 = _k[0], setH06 = _k[1];
    var _l = react_1.useState(0), h07 = _l[0], setH07 = _l[1];
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
                react_1["default"].createElement("div", { className: "management__department", id: "controller", ref: block6 }, "\"Controller\""),
                react_1["default"].createElement("div", { className: "management__department", id: "generalMeetingOfShareholders", ref: block7 }, "\"GeneralMeetingOfShareholders\"")),
            react_1["default"].createElement("div", { className: "management__bar-container", ref: barContainer },
                react_1["default"].createElement("aside", { className: barNavAbsolute ? "management__bar-nav_absolute" : "management__bar-nav_fixed" },
                    react_1["default"].createElement("div", { className: "management__bar-icon", style: { top: iconTop * 48 + "px" } },
                        react_1["default"].createElement(DarkIcon_1["default"], { icon: "Arrow Down" })))))));
};
exports["default"] = Management;
