/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let a: number = 6;
let b: number = 2;

console.log('\nAddition');
console.log(a + b);

console.log('\nSubtraction');
console.log(a - b);

console.log('\nMultiplication');
console.log(a * b);

console.log('\nDivision');
console.log(a / b);

console.log('\nDivision with reminder');
a = 7;
b = 3;
console.log(a % b);

console.log('\nExponentiation');
a = 2;
console.log(a ** b);

console.log('\nFloats');
let c: number = 3.14;
console.log(c);

console.log('\nConvert to a fixed');
console.log(a.toFixed(4));
console.log(c.toFixed(1));

console.log('\nConvert with specified precision (number of digits)');
console.log(a.toPrecision(1));
console.log(a.toPrecision(2));

c = 333.3333;
console.log(c.toPrecision(1)); // 3e+2 = 3 * (10 ** 2) =  300
console.log(c.toPrecision(2)); // 3.3e+2 = 330
console.log(c.toPrecision(3)); // 3.33e+2 = 333

export {};
