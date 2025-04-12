/* eslint-disable no-console */
export interface ISuperHero {
  firstName: string;
  lastName: string;
  age: number;
  alias: string;
}

export const spiderman: ISuperHero = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 30,
  alias: 'SpiderMan',
};
console.log(spiderman);
