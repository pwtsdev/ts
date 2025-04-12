/* eslint-disable no-console */

console.log('\nEnums (fully initialized)');
enum CardinalDirectionsEnum {
  NORTH = 'N',
  EAST = 'E',
  SOUTH = 'S',
  WEST = 'W',
}
console.log(CardinalDirectionsEnum);

console.log('\nMaps');
const cardinalDirectionsMap = new Map([
  ['north', 'N'],
  ['east', 'E'],
  ['south', 'S'],
  ['west', 'W'],
]);
console.log(cardinalDirectionsMap);

console.log('\nObjects');
const cardinalDirectionsObject = {
  north: 'N',
  east: 'E',
  south: 'S',
  west: 'W',
};
console.log(cardinalDirectionsObject);

console.log('\nGet a property value');
console.log(CardinalDirectionsEnum.NORTH);
console.log(cardinalDirectionsMap.get('north'));
// console.log(cardinalDirectionsObject['north']);
console.log(cardinalDirectionsObject.north);

console.log('\nAdd a new property');
cardinalDirectionsMap.set('north-west', 'NW');
console.log(cardinalDirectionsMap);
// cardinalDirectionsObject.northWest = 'NW';

console.log('\nRemove a property');
cardinalDirectionsMap.delete('north-west');
console.log(cardinalDirectionsMap);

delete cardinalDirectionsObject.west;
// console.log(cardinalDirectionsObject);

console.log('\nChange value of the property');
cardinalDirectionsObject.north = 'North';
console.log(cardinalDirectionsObject);

export {};
