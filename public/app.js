import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// Interfaces = enforce a structure to a class or an object
var docOne;
var docTwo;
docOne = new Invoice('Homer', 'Eduz', 20.20);
docTwo = new Payment('Fabricio', 'Agua e Gas', 93);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
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
var invTwo = new Invoice('Richard', 'Devendo C.H.I.', 2330);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// inputs
var form = document.querySelector('.new-item-form');
var types = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var ulist = document.querySelector('.item-list');
var list = new ListTemplate(ulist);
// HTMLFormElement, HTMLInputElement, HTMLSelectElement;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (types.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, types.value, 'end');
});
