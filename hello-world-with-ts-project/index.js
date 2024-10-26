"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = hello;
var world = 'world with ts config';
function hello(who) {
    if (who === void 0) { who = world; }
    return "Hello ".concat(who, "! ");
}
console.log(hello('world with ts config'));
