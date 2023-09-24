// Function type
// must be capital F

let greet: Function;

greet = () => {
  console.log('Hello, baby');
}

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

logIn({ name: 'vinicius' , uid: 230193 });

