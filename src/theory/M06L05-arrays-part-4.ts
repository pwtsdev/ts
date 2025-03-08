/* eslint-disable no-console */

const names1: string[] = ['Tytus', 'Romek', 'Atomek'];
const names2: string[] = ['Dora', 'Boots'];

console.log('\nJoin 2 arrays');
console.log(names1.concat(names2));
console.log(names1);
console.log(names2);
console.log([...names1, ...names2]);

console.log('\nFlatten an array');
const names = [names1, names2];
console.log(names);
console.log(names.flat());
console.log(names);

console.log('\nJoin elements of an array');
const namesFlat = names.flat();
console.log(namesFlat.join(', '));

export {};
