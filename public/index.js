"use strict";
// inference = recieves a type value and assumes it's type
// var: string, number, boolean, symbol, other...
// the check is running befrore compiling
const names = ['luigi', 'vinicius', 'junior'];
names.push('toad');
// names.push(20);
// let numbers = [1, 20, 23, 414, 123, 40];
let mixed = ['ken', 10, 'chun li', true];
let tarot = {
    name: 'John Sena',
    age: 2020,
    skills: ["Musicianship", "Code"]
};
mixed.push(false);
// ==============
// explicit types
// ==============
let character;
let age;
let isLogged;
// arrays
// one declaration or many declarations (type|type|type) or type|type|type
let uid;
let person;
let persona;
let Names2 = [];
Names2.push('vinicius');
Names2.push(20);
uid = 200920394;
persona = ["Gargamel", "Smurfs"];
person = [];
person.push("Gabriel", "Romero");
// objects
let categories;
categories = {
    substance: "Book",
    quantity: 20
};
// ==================
// Dynamic any types
// ==================
let hage = 20;
hage = 'fodido';
