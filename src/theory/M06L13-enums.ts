/* eslint-disable no-console */

console.log('\nEnums');
enum CardinalDirections {
  NORTH,
  EAST,
  SOUTH,
  WEST,
}
console.log(CardinalDirections);

console.log('\nType of an enum');
console.log(typeof CardinalDirections);

console.log('\nIterate over a keys from an enum');
for (const key in CardinalDirections) {
  console.log(key);
}

console.log('\nCheck if key exists in an enum');
console.log('NORTH' in CardinalDirections);
console.log('N' in CardinalDirections);
console.log('0' in CardinalDirections);

console.log('\nGet value by a key name from an enum');
console.log(CardinalDirections.SOUTH);

console.log('\nGet value by an index from an enum');
console.log(CardinalDirections[2]);

console.log('\nGet value by a key (as a string) from an enum');
// eslint-disable-next-line @typescript-eslint/dot-notation
console.log(CardinalDirections['SOUTH']);

console.log('\nEnums - (partly) initialized');
enum CardinalDirectionsInit {
  NORTH = 5,
  EAST,
  SOUTH,
  WEST,
}
console.log(CardinalDirectionsInit);

console.log('\nEnums - fully initialized');
enum CardinalDirectionsString {
  NORTH = 'N',
  EAST = 'E',
  SOUTH = 'S',
  WEST = 'W',
}
console.log(CardinalDirectionsString);

export {};
