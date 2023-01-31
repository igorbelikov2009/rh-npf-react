"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Paragraph_1 = require("../../general/paragraphs/Paragraph/Paragraph");
var ParagraphBeforeArr_1 = require("../../general/paragraphs/ParagraphBeforeArr");
var ParagraphsArr_1 = require("../../general/paragraphs/ParagraphsArr");
var InvestmentDescription_module_scss_1 = require("./InvestmentDescription.module.scss");
var InvestmentDescription = function () {
    var paragraphsBeforeArray2 = [
        {
            text: "основана на анализе макроэкономических тенденций и финансовых рынков в долгосрочной перспективе,"
        },
        {
            text: "предусматривает широкую диверсификацию инвестиционных портфелей,"
        },
        {
            text: "предписывает четкий контроль и регулярное отслеживание динамики инвестиционных портфелей."
        },
    ];
    var paragraphsArray3 = [
        {
            text: "Банки, с которыми сотрудничает Фонд, являются участниками системы страхования вкладов и  обладают кредитными рейтингами от одного или нескольких международных и/или национальных рейтинговых агентств – Рейтинговое агентство «Эксперт РА», АКРА (Аналитическое Кредитное Рейтинговое Агентство), Standard & Poor`s, Fitch или Moody`s."
        },
        {
            text: "Для инвестиций в государственные ценные бумаги и другие финансовые инструменты Фонд привлекает управляющие компании. АО НПФ «Ренессанс пенсии» сотрудничает с АО «Сбер Управление Активами», АО «УК «ТРАНСФИНГРУП» и АО УК «СПУТНИК – УПРАВЛЕНИЕ КАПИТАЛОМ»."
        },
        {
            text: "В соответствии с нормами законодательства, ежедневный контроль за соблюдением фондами и управляющими компаниями ограничений на размещение средств пенсионных резервов осуществляет специализированный депозитарий. Для АО НПФ «Ренессанс пенсии» эти услуги предоставляет АО ВТБ Специализированный депозитарий, занимающее лидирующие позиции на внутреннем рынке депозитарных услуг. Фонд на ежедневной основе рассчитывает долю активов, приходящуюся на каждый пенсионный счет. Окончательный расчет и распределение инвестиционного дохода за календарный год на пенсионные счета участников производится, в соответствии с требованиями законодательства РФ, до 31-го марта следующего календарного года."
        },
    ];
    var paragraphsBeforeArray4 = [
        {
            text: "доход от размещения пенсионных резервов может увеличиваться или уменьшаться;"
        },
        {
            text: "результаты инвестирования в прошлом не определяют доходов в будущем;"
        },
        {
            text: "государство не гарантирует доходности размещения средств пенсионных резервов."
        },
    ];
    return (react_1["default"].createElement("div", { className: InvestmentDescription_module_scss_1["default"]["container"] },
        react_1["default"].createElement(Paragraph_1["default"], { text: "\u0410\u041E \u041D\u041F\u0424 \u00AB\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441 \u043F\u0435\u043D\u0441\u0438\u0438\u00BB \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0435\u0437\u0435\u0440\u0432\u043E\u0432 \u0432 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0424\u043E\u043D\u0434\u0430 \u043D\u0430 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u0445 \u0441\u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0441\u0442\u0438 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u0424 \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439, \u043A\u043E\u0442\u043E\u0440\u0430\u044F:" }),
        react_1["default"].createElement(ParagraphBeforeArr_1["default"], { paragraphsBeforeArray: paragraphsBeforeArray2 }),
        react_1["default"].createElement(ParagraphsArr_1["default"], { paragraphsArray: paragraphsArray3 }),
        react_1["default"].createElement("h1", { className: InvestmentDescription_module_scss_1["default"]["container__heading"] }, "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u044F \u0434\u043E\u0445\u043E\u0434\u0430"),
        react_1["default"].createElement(Paragraph_1["default"], { text: "\u041F\u0440\u043E\u0441\u0438\u043C \u0432\u0430\u0441 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435:" }),
        react_1["default"].createElement(ParagraphBeforeArr_1["default"], { paragraphsBeforeArray: paragraphsBeforeArray4 }),
        react_1["default"].createElement(Paragraph_1["default"], { text: " " }),
        react_1["default"].createElement(Paragraph_1["default"], { text: " " })));
};
exports["default"] = InvestmentDescription;
