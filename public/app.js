import { Invoice } from './classes/invoice.js';
var invOne = new Invoice('Ronald', 'Citibank Seagayi', 29.99);
var invTwo = new Invoice('Richard', 'Nubank Fatura', 2330);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv, inv.amount, inv.format());
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
