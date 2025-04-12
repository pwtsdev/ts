/* eslint-disable no-console */

console.log('\nComplex object with properties of various types');
const superhero = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 30,
  alias: 'SpiderMan',
};

console.log('\nDisplay names of all properties of an object');
for (const i in superhero) {
  console.log(i);
}

console.log('\nCheck if attribute exists in an object');
console.log('age' in superhero);
console.log('age2' in superhero);

console.log('\nDisplay values of all properties of an object');
for (const v of Object.values(superhero)) {
  console.log(v);
}

console.log('\nDisplay names of all properties and their values of an object');
for (const [k, v] of Object.entries(superhero)) {
  console.log(k + ': ' + v.toString());
}

console.log('\nExport object to a JSON');
console.log(JSON.stringify(superhero));

export {};
