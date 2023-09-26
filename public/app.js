var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
    var values = [toFrom.value, details.value, amount.valueAsNumber];
    if (types.value === 'invoice') {
        doc = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], values, false)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArray([void 0], values, false)))();
    }
    console.log(doc);
    list.render(doc, types.value, 'end');
});
// generics
//         must be an object// must extend object
//         can be extends { name: string } (more specific);
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var personOne = addUID({ name: 'Mr. Tomaselli', age: 38 });
console.log(personOne);
// if we try to log personOne.name it will return an error, cuz it doesn't know the properties of the object passed as parameter.
// enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
var persona = {
    uid: 33,
    resourceName: ResourceType.PERSON,
    data: 'John'
};
var personaTwo = {
    uid: 22,
    resourceName: ResourceType.BOOK,
    data: 'Kybalion'
};
// Tuples
// assign types to array position
var arr = ['Firaga', 20, true];
var tup = ['Blizaga', 30, false];
tup[0] = 'Thundaga';
// tup[1] = 'Fire tornado' -- ts doesn't accept this and return an error
// if logged to the console, it will show the index, not the name. ex: 0 instead of BOOK;
// Difference between ! and ? in TS -> ! = tells tsc that the value exists;
//                                     ? = the value is optional
