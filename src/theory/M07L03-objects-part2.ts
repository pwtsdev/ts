/* eslint-disable no-console */

console.log('\nComplex object with properties of various types');
const superhero1 = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 30,
  alias: 'SpiderMan',
};

console.log(superhero1);
console.log(`${superhero1.firstName} ${superhero1.lastName} (${superhero1.age.toString()}) is a ${superhero1.alias}`);

console.log(`\nAssign object property value to a variable`);
const age = superhero1.age.toString();
console.log(`${superhero1.firstName} ${superhero1.lastName} (${age}) is a ${superhero1.alias}`);

console.log(`\nObject methods`);
const superhero2 = {
  firstName: 'Clark',
  lastName: 'Kent',
  age: 40,
  alias: 'SuperMan',
  fullName: function (): string {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(superhero2);
console.log(`${superhero2.fullName()} (${superhero2.age.toString()}) is a ${superhero2.alias}`);

export {};
