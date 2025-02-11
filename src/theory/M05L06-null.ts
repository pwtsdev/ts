/* eslint-disable no-console */

let someValue: string | null = null;

console.log(someValue);
console.log(typeof someValue);

someValue = 'Some text that was set later';

console.log(someValue);
console.log(typeof someValue);

if (someValue) {
  console.log("It's string");
} else {
  console.log("It's null");
}

export {};
