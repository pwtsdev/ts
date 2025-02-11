/* eslint-disable no-console */

function isNumber(n: unknown): boolean {
  if (isNaN(n as number)) {
    return false;
  } else {
    return true;
  }
}

console.log(isNumber(12));
console.log(isNumber(null));
console.log(isNumber('xyz'));

export {};
