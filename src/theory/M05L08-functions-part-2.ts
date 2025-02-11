/* eslint-disable no-console */

const s = 3;
const exp = 2;

console.log('\nFunction with optional parameter:');
function sqrt(a: number, b?: number): number {
  if (!b) {
    b = 0;
  }
  return a ** b;
}
console.log(sqrt(s, exp));

console.log('\nFunction with default parameter value:');
function sqrtS(a: number, b = 0): number {
  return a ** b;
}
console.log(sqrtS(s, exp));

export {};
