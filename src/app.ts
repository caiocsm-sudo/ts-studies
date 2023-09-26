import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

// Interfaces = enforce a structure to a class or an object

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Homer', 'Eduz', 20.20);
docTwo = new Payment('Fabricio', 'Agua e Gas', 93);

let docs: HasFormatter[] = [];

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

const invOne = new Invoice('Ronald', 'Citibank Seagayi', 29.99);
const invTwo = new Invoice('Richard', 'Devendo C.H.I.', 2330);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// inputs
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const types = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ulist = document.querySelector('.item-list') as HTMLUListElement;
let list = new ListTemplate(ulist);

// HTMLFormElement, HTMLInputElement, HTMLSelectElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (types.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }
  console.log(doc);

  list.render(doc, types.value, 'end');
});

// generics

//         must be an object// must extend object
//         can be extends { name: string } (more specific);
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

let personOne = addUID({ name: 'Mr. Tomaselli', age: 38 });

console.log(personOne);

// if we try to log personOne.name it will return an error, cuz it doesn't know the properties of the object passed as parameter.

// enums

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const persona: Resource<string> = {
  uid: 33,
  resourceName: ResourceType.PERSON,
  data: 'John'
};

const personaTwo: Resource<string> = {
  uid: 22, 
  resourceName: ResourceType.BOOK,
  data: 'Kybalion'
};

// Tuples

let arr = ['Firaga', 20, true];

// if logged to the console, it will show the index, not the name. ex: 0 instead of BOOK;

// Difference between ! and ? in TS -> ! = tells tsc that the value exists;
//                                     ? = the value is optional

