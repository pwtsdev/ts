/* eslint-disable no-console */

console.log('\nWhy use arrays?');

const name1 = 'Tytus';
const name2 = 'Romek';
const name3 = 'Atomek';

console.log(`${name1},${name2},${name3}`);

console.log('\nCreate an array');

const names: string[] = ['Tytus', 'Romek', 'Atomek'];
console.log(names);
console.log(names.toString());

// eslint-disable-next-line @typescript-eslint/no-array-constructor
const numbers = new Array(15, 3, 14);
console.log(numbers);

console.log('\nType of an array');
console.log(typeof names);

console.log('\nLength of an array');
console.log(names.length);

export {};
