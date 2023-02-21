"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UserItem_module_scss_1 = require("./UserItem.module.scss");
// interface IUser {
//     id: number;
//     name: string;
//     email: string;
//   }
var UserItem = function (_a) {
    var id = _a.id, name = _a.name, email = _a.email;
    return (react_1["default"].createElement("div", { className: UserItem_module_scss_1["default"]["user-item"] },
        react_1["default"].createElement("h3", { className: UserItem_module_scss_1["default"]["user-item__id"] },
            "id: ",
            id,
            " "),
        react_1["default"].createElement("p", { className: UserItem_module_scss_1["default"]["user-item__name"] },
            " ",
            name,
            " "),
        react_1["default"].createElement("p", { className: UserItem_module_scss_1["default"]["user-item__email"] },
            " ",
            email,
            " ")));
};
exports["default"] = UserItem;
