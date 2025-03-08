/* eslint-disable no-console */
const numbers: number[] = [15, 3, 14, 18, 4];
const empty = [];

console.log('\nWhile loop');
let i = 0;
let sumW = 0;
while (i < numbers.length) {
  sumW += numbers[i];
  i++;
}
console.log(sumW);

console.log('\nWhile loop (an empty array)');
let j = 0;
console.log('Iterate over an empty array (start)');
while (j < empty.length) {
  console.log('Iterate over an empty array (inside)');
  j++;
}
console.log('Iterate over an empty array (end)');

console.log('\nDo/while loop');
let k = 0;
let sumD = 0;
do {
  sumD += numbers[k];
  k++;
} while (k < numbers.length);
console.log(sumD);

console.log('\nDp/while loop (an empty array)');
let l = 0;
console.log('Iterate over an empty array (start)');
do {
  console.log('Iterate over an empty array (inside)');
  l++;
} while (l < empty.length);
console.log('Iterate over an empty array (end)');

export {};
