/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable no-console */

console.log('\nUndefined:');
function u(): undefined {
  return;
}

console.log(u());
console.log(typeof u());

console.log('\nUndefined when throwing an exception:');
function isNumber(n: any): boolean | undefined {
  if (isNaN(n as number)) {
    return false;
  }
}

console.log(isNumber(12));
console.log(isNumber(null));
console.log(isNumber('xyz'));

export {};
