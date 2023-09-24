"use strict";
// Function type
// must be capital F
var greet;
var funVoid;
var calc;
greet: funVoid = function () {
    console.log('console');
};
calc = function (numOne, numTwo, operation) {
    if (operation === 'sum') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
var logDetails;
logDetails = function (obj) {
    console.log('Logging details: ' + obj.name + ' ' + obj.age);
};
logDetails({ name: 'Satmahaj', age: 200 });
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
