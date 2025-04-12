/* eslint-disable no-console */

console.log('\nCreate first objects with types definition');
const superhero1: { firstName: string; lastName: string; age: number; alias: string } = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 30,
  alias: 'SpiderMan',
};
console.log(superhero1);

console.log("\nCreate a reference to an object and modify it's values");
const p1 = superhero1;
console.log(p1);

p1.firstName = 'Clark';
p1.lastName = 'Kent';
p1.age = 40;
p1.alias = 'SuperMan';

console.log(p1);
console.log(superhero1);

console.log('\nCreate second objects with types definition');
const person2: { firstName: string; lastName: string; age: number; alias: string } = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 30,
  alias: 'SpiderMan',
};
console.log(person2);

console.log('\nCopy an object (it makes a new object)');
const p2 = Object.assign({}, person2);
console.log(p2);

p2.firstName = 'Clark';
p2.lastName = 'Kent';
p2.age = 40;
p2.alias = 'SuperMan';

console.log(p2);
console.log(person2);

console.log('\nCreate an object with optional properties');
const person3: { firstName: string; lastName: string; age: number; alias?: string } = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 30,
};
console.log(person3);
person3.alias = 'SpiderMan';
console.log(person3);

export {};
