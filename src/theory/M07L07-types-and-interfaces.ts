/* eslint-disable no-console */

console.log('\nDefine object structure with a type');
/* eslint-disable @typescript-eslint/consistent-type-definitions */
type SuperHeroType = {
  firstName: string;
  lastName: string;
  age: number;
  alias: string;
};

console.log('\nCreate first object with specified type');
const spidermanT: SuperHeroType = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 30,
  alias: 'SpiderMan',
};
console.log(spidermanT);

console.log('\nCreate second object with specified type');
const supermanT: SuperHeroType = {
  firstName: 'Clark',
  lastName: 'Kent',
  age: 40,
  alias: 'SuperMan',
};
console.log(supermanT);

console.log('\nDefine object structure with an interface');
interface ISuperHero {
  firstName: string;
  lastName: string;
  age: number;
  alias: string;
}

console.log('\nCreate first object with specified interface');
const spiderman: ISuperHero = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 30,
  alias: 'SpiderMan',
};
console.log(spiderman);

console.log('\nCreate second object with specified interface');
const superman: ISuperHero = {
  firstName: 'Clark',
  lastName: 'Kent',
  age: 40,
  alias: 'SuperMan',
};
console.log(superman);

console.log('\nExtend object structure');
interface ISuperHeroWithAddress extends ISuperHero {
  address: string;
}

const supermanA: ISuperHeroWithAddress = {
  firstName: 'Clark',
  lastName: 'Kent',
  age: 40,
  alias: 'SuperMan',
  address: 'Metropolis',
};
console.log(supermanA);

export {};
