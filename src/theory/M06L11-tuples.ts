/* eslint-disable no-console */

let someTuple: [number, boolean, string] = [5, false, 'Some text'];
console.log(someTuple);

// someTuple = [6, 1, 'Other text'];
// console.log(someTuple);

// someTuple = [6, false, 'Other text', 1];
// console.log(someTuple);

someTuple = [6, false, 'Other text'];
console.log(someTuple);
console.log(someTuple[2]);

console.log("\nAdding an element (DON'T DO IT)");
someTuple.push('Test');
console.log(someTuple);

console.log('\nDestructuring');
const vector: [number, number] = [2, 3];
console.log(vector);

const [a, b] = vector;
console.log(a);
console.log(b);

export {};
