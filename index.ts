// inference = recieves a type value and assumes it's type
// var: string, number, boolean, symbol, other...
// the check is running befrore compiling

let character = 'luigi';

character = 'mario';

console.log(character);

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(10).toFixed(1));

