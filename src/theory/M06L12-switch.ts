/* eslint-disable no-console */

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const cd: string = 'N';
let cardinalDirection: string | null;
switch (cd) {
  case 'N':
    cardinalDirection = 'NORTH';
    break;
  case 'E':
    cardinalDirection = 'EAST';
    break;
  case 'W':
    cardinalDirection = 'WEST';
    break;
  case 'S':
    cardinalDirection = 'SOUTH';
    break;
  default:
    cardinalDirection = null;
}
console.log(cardinalDirection);

export {};
