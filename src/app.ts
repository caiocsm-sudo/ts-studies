import { Invoice } from './classes/invoice.js';

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
