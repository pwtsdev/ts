/* eslint-disable no-console */

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const cd: string = 'A';
let cardinalDirection: string | null;
if (cd === 'N') {
  cardinalDirection = 'NORTH';
} else if (cd === 'E') {
  cardinalDirection = 'EAST';
} else if (cd === 'W') {
  cardinalDirection = 'WEST';
} else if (cd === 'S') {
  cardinalDirection = 'SOUTH';
} else {
  cardinalDirection = null;
}
console.log(cardinalDirection);

export {};
