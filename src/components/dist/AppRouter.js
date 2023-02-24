"use strict";
exports.__esModule = true;
var react_1 = require("react");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var react_router_dom_1 = require("react-router-dom");
var AboutFundPage_1 = require("../pages/AboutFundPage");
var AdminPanel_1 = require("../pages/AdminPanel");
var BusinessPage_1 = require("../pages/BusinessPage");
var ContactsPage_1 = require("../pages/ContactsPage");
var InfoDisclosurePage_1 = require("../pages/InfoDisclosurePage");
var InvestmentPage_1 = require("../pages/InvestmentPage");
var MainPage_1 = require("../pages/MainPage");
var ManagementPage_1 = require("../pages/ManagementPage");
var News_1 = require("../pages/News");
var NewsPage_1 = require("../pages/NewsPage");
var Notfoundpage_1 = require("../pages/Notfoundpage");
var ServiceSupportPage_1 = require("../pages/ServiceSupportPage");
var TaxationPage_1 = require("../pages/TaxationPage");
var Layout_1 = require("./Layout");
var AppRouter = function () {
    return (react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Layout_1["default"], null) },
            react_1["default"].createElement(react_router_dom_1.Route, { index: true, element: react_1["default"].createElement(MainPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "about", element: react_1["default"].createElement(AboutFundPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "business", element: react_1["default"].createElement(BusinessPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "contacts", element: react_1["default"].createElement(ContactsPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "info", element: react_1["default"].createElement(InfoDisclosurePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "investment", element: react_1["default"].createElement(InvestmentPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "managment", element: react_1["default"].createElement(ManagementPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "news", element: react_1["default"].createElement(News_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "news/:id", element: react_1["default"].createElement(NewsPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "notfoundpage", element: react_1["default"].createElement(Notfoundpage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "support", element: react_1["default"].createElement(ServiceSupportPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "taxation", element: react_1["default"].createElement(TaxationPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "adminpanel", element: react_1["default"].createElement(AdminPanel_1["default"], null) }))));
};
exports["default"] = AppRouter;
