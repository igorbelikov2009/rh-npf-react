"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TopBlock_1 = require("../components/general/TopBlock");
var aboutFundTop_jpg_1 = require("../assets/images/aboutFund/aboutFundTop.jpg");
var AboutUs_1 = require("../components/aboutFund/AboutUs");
var Cards_1 = require("../components/general/cards/Cards/Cards");
var AboutFundBlock_1 = require("../components/aboutFund/AboutFundBlock/AboutFundBlock");
var aboutFundCardsAPI_1 = require("../services/aboutFundCardsAPI");
var AboutFundPage = function () {
    var _a = aboutFundCardsAPI_1.aboutFundCardsAPI.useGetAboutFundCardsQuery(20), aboutFundCards = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TopBlock_1["default"], { image: aboutFundTop_jpg_1["default"], heading: "\u041E \u0444\u043E\u043D\u0434\u0435", subheading: "\u041D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0438\u0439 \u0434\u0435\u043D\u044C \u0410\u041E \u041D\u041F\u0424 '\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441 \u043F\u0435\u043D\u0441\u0438\u0438' \u2013 \u043E\u0434\u0438\u043D \u0438\u0437 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u044B\u0445 \u043D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u0445 \u0444\u043E\u043D\u0434\u043E\u0432 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435 \u043D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F (\u041D\u041F\u041E)." }),
        isLoading && react_1["default"].createElement("h1", null, "Loading..."),
        isError && (react_1["default"].createElement("h1", null, "\u0417\u0430\u043F\u0443\u0441\u0442\u0438 \u0441\u0435\u0440\u0432\u0435\u0440, \u0441\u043E\u0437\u0434\u0430\u0439 \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0438 \u0441\u043A\u043E\u043C\u0430\u043D\u0434\u0443\u0439 \u0432 \u043D\u0451\u043C: json-server --watch db.json --port 5000\"")),
        react_1["default"].createElement(AboutUs_1["default"], null),
        react_1["default"].createElement(AboutFundBlock_1["default"], null),
        aboutFundCards && react_1["default"].createElement(Cards_1["default"], { cards: aboutFundCards })));
};
exports["default"] = AboutFundPage;
