/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

const numbers: number[] = [15, 3, 14, 18, 4];

function sum(total: number, value: number, index: number, array: number[]): number {
  const sumValue = total + value;
  console.log(`${total.toString()} + ${value.toString()} = ${sumValue.toString()}`);
  return sumValue;
}

console.log('\nReduce an array (from left)');
console.log(numbers.reduce(sum));
console.log(numbers);

console.log('\nReduce an array (from right)');
console.log(numbers.reduceRight(sum));
console.log(numbers);

function multiply(value: number, index: number, array: number[]): unknown {
  // return value * 2;
  return [value * 2];
}

console.log('\nMap an array');
console.log(numbers.map(multiply));
console.log(numbers);

console.log('\nMap an array and flat');
console.log(numbers.flatMap(multiply));
console.log(numbers);

console.log('\nCreate an array from a string (or other iterable)');
console.log(Array.from('Some string'));

export {};
