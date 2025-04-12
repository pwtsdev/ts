/* eslint-disable no-console */
console.log('\nObjects in objects');
const superhero = {
  firstName: 'Clark',
  lastName: 'Kent',
  age: 40,
  alias: 'SuperMan',
  addresses: [{ city: 'Smallville' }],
};
console.log(superhero);
console.log(superhero.addresses);
console.log(superhero.addresses[0]);

console.log('\nAdd a second address as an object in the array');
superhero.addresses[1] = { city: 'Metropolis' };
console.log(superhero);
console.log(superhero.addresses[0]);
console.log(superhero.addresses[1]);

export {};
