/* eslint-disable no-console */

console.log('\nFunction:');
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(3, 2));
console.log(typeof add);
console.log(typeof add(3, 2));

console.log('\nAnonymous function:');
const sub = function (a: number, b: number): number {
  return a - b;
};
console.log(sub(3, 2));
console.log(typeof sub);

console.log('\nArrow function:');
const multiply = (a: number, b: number): number => {
  return a * b;
};
console.log(multiply(3, 2));
console.log(typeof multiply);

console.log('\nPassing value from a variable to the function');
const a = 3;
const b = 2;

console.log(add(a, b));
console.log(sub(a, b));
console.log(multiply(a, b));

export {};
