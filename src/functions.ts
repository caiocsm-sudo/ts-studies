// Function type
// must be capital F

let greet: Function;
let funVoid: () => void;
let calc: (a: number, b: number, c: string) => number;

greet: funVoid = () => {
  console.log('console');
}

calc = (numOne: number, numTwo: number, operation: string) => {
  if (operation === 'sum') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

let logDetails: (obj: { name: string, age: number }) => void;

logDetails = (obj) => {
  console.log('Logging details: ' + obj.name + ' ' + obj.age);
}

logDetails({ name: 'Satmahaj', age: 200 });

// void = doesn't return anything; return is type inferred

const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
}

const sum = (a: number, b: number): number => {
  return a + b;
}

const result = sum(40, 45);

// type aliases

type StringOrNumber = string | number;
type ObjWithName = { name: string, uid: StringOrNumber };

const logIn = (user: ObjWithName) => {
  console.log(user.name);
};

