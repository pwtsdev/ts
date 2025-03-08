/* eslint-disable no-console */

console.log('\nCreating a map');
const cardinalDirectionsString = new Map([
  ['north', 'N'],
  ['east', 'E'],
  ['south', 'S'],
  ['west', 'W'],
]);
console.log(cardinalDirectionsString);

console.log('\nSize of a map');
console.log(cardinalDirectionsString.size);

console.log('\nGet an element of a map');
console.log(cardinalDirectionsString.get('north'));
console.log(cardinalDirectionsString.get('north west'));

console.log('\nAdd an element of a map');
console.log(cardinalDirectionsString.set('north west', 'NW'));

console.log('\nChange an element of a map');
console.log(cardinalDirectionsString.set('north', 'NW'));

console.log('\nCheck if an element exists in a map');
console.log(cardinalDirectionsString.has('north west'));

console.log('\nRemove an element from a map');
console.log(cardinalDirectionsString.delete('north west'));
console.log(cardinalDirectionsString);

console.log('\nGet all elements from a map');
console.log(cardinalDirectionsString.entries());

console.log('\nGet all keys from a map');
console.log(cardinalDirectionsString.keys());

console.log('\nGet all values from a map');
console.log(cardinalDirectionsString.values());

console.log('\nIterate over all elements of a map');
cardinalDirectionsString.forEach(function (value, key) {
  console.log(`${key} => ${value}`);
});

console.log('\nRemove all elements from a map');
cardinalDirectionsString.clear();
console.log(cardinalDirectionsString);

export {};
