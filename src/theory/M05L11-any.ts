/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

let value: any = JSON.parse('true');
console.log(value);
console.log(typeof value);

value = 'Value';
console.log(value);
console.log(typeof value);

function add(a: any, b: any): any {
  return a + b;
}

console.log('\nAny as a number:');
const c: number = add(2, 3);
console.log(c);
console.log(typeof c);

console.log(typeof add(2, 3));

console.log('\nAny as a string:');
const d: string = add('Super', 'man');
console.log(d);
console.log(typeof d);

console.log('\nAny in mixed types:');
console.log(add('/dev/', null));
console.log(add(10, null));

console.log(add(null, true));
console.log(add(null, false));
console.log(add(true, true));

export {};
