"use strict";
// inference = recieves a type value and assumes it's type
// var: string, number, boolean, symbol, other...
// the check is running befrore compiling
var names = ['luigi', 'vinicius', 'junior'];
names.push('toad');
// names.push(20);
// let numbers = [1, 20, 23, 414, 123, 40];
var mixed = ['ken', 10, 'chun li', true];
var tarot = {
    name: 'John Sena',
    age: 2020,
    skills: ["Musicianship", "Code"]
};
mixed.push(false);
// ==============
// explicit types
// ==============
var character;
var age;
var isLogged;
// arrays
// one declaration or many declarations (type|type|type) or type|type|type
var uid;
var person;
var persona;
var Names2 = [];
Names2.push('vinicius');
Names2.push(20);
uid = 200920394;
persona = ["Gargamel", "Smurfs"];
person = [];
person.push("Gabriel", "Romero");
// objects
var categories;
categories = {
    substance: "Book",
    quantity: 20
};
// ==================
// Dynamic any types
// ==================
var hage = 20;
hage = 'fodido';
