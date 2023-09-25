import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// Interfaces = enforce a structure to a class or an object

let docOne: HasFormatter;
let docTwo: HasFormatter;

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

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

const invOne = new Invoice('Ronald', 'Citibank Seagayi', 29.99);
const invTwo = new Invoice('Richard', 'Nubank Fatura', 2330);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.client, inv, inv.amount, inv.format());
});

// inputs
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const types = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// HTMLFormElement, HTMLInputElement, HTMLSelectElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(invOne.format());
  console.log(types.value, toFrom.value, details.value, amount.value);
});

