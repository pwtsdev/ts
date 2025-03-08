/* eslint-disable no-console */

const names: string[] = ['Tytus', 'Romek', 'Atomek', 'Dora', 'Boots'];
console.log(names);
const numbers: number[] = [15, 3, 14, 18, 4];
console.log(numbers);

console.log('\nReverse an array');
console.log(names.toReversed());
console.log(names);

console.log('\nSort an array');
console.log(names.toSorted());
console.log(numbers.toSorted());
console.log(
  numbers.toSorted(function (a, b) {
    // console.log(`${a.toString()} - ${b.toString()}`);
    return a - b;
  }),
);

console.log('\nRemove (and replace) elements from an array');
console.log(names);
console.log(names.toSpliced(0, 3));
console.log(names.toSpliced(0, 1, 'Nobody'));
console.log(names.toSpliced(0, 3, 'T.', 'R.', 'A.'));
console.log(names);

console.log('\nCopy an array');
const namesCopy = names.slice();
console.log(namesCopy);

console.log('\nCopy an array (spread operator)');
const namesCopyS = [...names];
console.log(namesCopyS);

console.log('\nCopy elements from an array (non destructive)');
const newNames = names.slice(-2);
console.log(names);
console.log(newNames);

console.log('\nCopy elements from an array (destructive)');
console.log(names.splice(2, 2));
console.log(names);

console.log('\nReplace multiple elements');
console.log(namesCopy);
namesCopy.splice(0, 3, 'Dora', 'Boots');
console.log(namesCopy);

export {};
