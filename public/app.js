"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes R$").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('Ronald', 'Citibank Seagayi', 29.99);
var invTwo = new Invoice('Richard', 'Nubank Fatura', 2330);
var invoices = [];
invoices.push(invOne);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
// inputs
var form = document.querySelector('.new-item-form');
var types = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// HTMLFormElement, HTMLInputElement, HTMLSelectElement;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(invOne.format());
    console.log(types.value, toFrom.value, details.value, amount.value);
});
