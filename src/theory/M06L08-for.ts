/* eslint-disable no-console */

const numbers: number[] = [15, 3, 14, 18, 4];

console.log('\nFor loop');
let sumLoop = 0;
// eslint-disable-next-line @typescript-eslint/prefer-for-of
for (let i = 0; i < numbers.length; i++) {
  sumLoop += numbers[i];
  console.log(`=> ${sumLoop.toString()}`);
}
console.log(sumLoop);

console.log('\nFor in');
let sumIn = 0;
// eslint-disable-next-line @typescript-eslint/no-for-in-array
for (const key in numbers) {
  sumIn += numbers[key];
  console.log(`=> ${sumIn.toString()}`);
}
console.log(sumIn);

console.log('\nFor of');
let sumOf = 0;
for (const value of numbers) {
  sumOf += value;
  console.log(`=> ${sumOf.toString()}`);
}
console.log(sumOf);

console.log('\nFor each');
let sumEach = 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function sum(value: number, index: number, array: number[]): void {
  sumEach += value;
  console.log(`=> ${sumEach.toString()}`);
}
numbers.forEach(sum);
console.log(sumEach);

export {};
