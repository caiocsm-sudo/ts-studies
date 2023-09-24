"use strict";
// Function type
// must be capital F
var greet;
greet = function () {
    console.log('Hello, baby');
};
// void = doesn't return anything; return is type inferred
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
var sum = function (a, b) {
    return a + b;
};
var result = sum(40, 45);
var logIn = function (user) {
    console.log(user.name);
};
logIn({ name: 'vinicius', uid: 230193 });
