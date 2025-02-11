/* eslint-disable no-console */

let someValue: string | number = '123';

console.log(someValue);
console.log(typeof someValue);

someValue = 123;

console.log(someValue);
console.log(typeof someValue);

type StrOrNr = string | number;

let otherValue: StrOrNr = '123';
console.log(otherValue);
console.log(typeof otherValue);

otherValue = 123;

console.log(otherValue);
console.log(typeof otherValue);

export {};
