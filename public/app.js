import { Invoice } from './classes/Invoice.js';
// Interfaces = enforce a structure to a class or an object
var docOne;
var docTwo;
/*
*
* const me: IsPerson = {
    name: 'taro',
    age: 29,
    speak: function(speak) {
      console.log(this.name + ' says ' + speak);
    },
    spend: function(val: number) {
      console.log(this.name + ' spent R$' + val);
      return val;
    }
  };
  console.log(me);
*
*/
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
