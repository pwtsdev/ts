/* eslint-disable no-console */

const names = new Set(['Tytus', 'Romek', 'Atomek', 'Dora', 'Boots', 'Tytus']);
console.log(names);

console.log('\nType of a set');
console.log(typeof names);

console.log('\nAdd an element to a set');
names.add('Nemo');
console.log(names);

console.log('\nDelete an element from a set');
names.delete('Nemo');
console.log(names);

console.log('\nGet set size');
console.log(names.size);

console.log('\nCheck if elements is in a set');
console.log(names.has('Tytus'));

console.log('\nShow all elements from a set');
console.log(names.entries());
console.log(names.keys());
console.log(names.values());

console.log('\nIterate over an elements of a set');
for (const value of names) {
  console.log(value);
}

console.log('\nRemove all elements from a set');
names.clear();
console.log(names);

export {};
