/* eslint-disable no-console */

const names: string[] = ['Tytus', 'Romek', 'Atomek', 'Dora'];
console.log(names);

console.log('\nAdd element at the end');
names.push('Boots');
console.log(names);

console.log('\nAdd element at the beginning');
names.unshift('Boots');
console.log(names);

console.log('\nRemove element at the end');
console.log(names.pop());
console.log(names);

console.log('\nRemove element at the beginning');
console.log(names.shift());
console.log(names);

console.log('\nChange element of an array');
names[3] = 'Some';
console.log(names);

console.log('\nCreate a new array with a changed element');
console.log(names.with(3, 'Dora'));
console.log(names);

console.log('\nGet element from an array');
console.log(names[0]); //First element
console.log(names[1]); //Second element
console.log(names[-1]); //Out of scale
console.log(names[names.length]); //Out of scale
console.log(names[names.length - 1]); //Last element
console.log(names.at(0)); //First element
console.log(names.at(-1)); //Last element

console.log('\nCopy an element');
console.log(names.copyWithin(2, 0));

// console.log('\nAdd element of other type to an array');
// names.push(13);

const numbers: readonly number[] = [15, 3, 14];
console.log(numbers);

// console.log('\nAdd element to a readonly array');
// numbers.push(13);

export {};
