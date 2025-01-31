/* eslint-disable no-constant-binary-expression */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-console */

const T: boolean = true;
const F: boolean = false;

console.log(T);
console.log(F);

console.log('\nNOT');
console.log(!true);
console.log(!false);

console.log('\nAND');
console.log(true && false);
console.log(true && !false);
console.log(!true && false);

console.log('\nOR');
console.log(false || !true);
console.log(true || false);
console.log(false || true);
console.log(true || !false);

export {};
