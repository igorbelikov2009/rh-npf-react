"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Address_1 = require("../components/contacts/Address/Address");
var ContactsMap_1 = require("../components/contacts/ContactsMap/ContactsMap");
require("../styles/dist/Contacts.css");
var Contacts = function () {
    return (react_1["default"].createElement("div", { className: "contacts" },
        react_1["default"].createElement(Address_1["default"], null),
        react_1["default"].createElement(ContactsMap_1["default"], null)));
};
exports["default"] = Contacts;
