/* eslint-disable no-console */

console.log('Not a number');
console.log(NaN);
console.log(typeof NaN);

console.log('\nCheck isNan');
console.log(isNaN(16));
console.log(!isNaN(16));
console.log(isNaN(NaN));

console.log('\nCheck isNan from type conversion');
console.log(isNaN(parseInt('xyz')));
console.log(isNaN(parseInt('123')));
