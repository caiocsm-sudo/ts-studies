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
// explicit type
// ==============

let character: string;
let age: number;
let isLogged: boolean;

// arrays

let person: string[];
let persona: Array<string>;

persona = ["Gargamel", "Smurfs"];
person = [];

person.push("Gabriel", "Romero");

