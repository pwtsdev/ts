/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable no-console */

console.log('\nConvert a boolean to a number');
console.log(Number(true));
console.log(Number(false));
console.log(typeof Number(false));

console.log('\nConvert a number to a boolean');
console.log(Boolean(1));
console.log(Boolean(0));
console.log(typeof Boolean(0));
console.log(Boolean(2)); // Don't do it ;)

console.log('\nConvert a boolean to a string');
const someBoolean: boolean = true;
console.log(someBoolean.toString());
console.log(typeof someBoolean.toString());

console.log(String(someBoolean));
console.log(typeof String(someBoolean));

console.log('\nConvert a string to a boolean');
const trueFromString: boolean = <boolean>JSON.parse('true'); // This is casting
console.log(trueFromString);
console.log(typeof trueFromString);

const falseFromString: boolean = JSON.parse('false') as boolean; // This is casting
console.log(falseFromString);
console.log(typeof falseFromString);

console.log('\nConvert a number to a string');
const someNumber: number = 123;
console.log(someNumber.toString());
console.log(typeof someNumber.toString());

console.log(String(someNumber));
console.log(typeof String(someNumber));

console.log(`\nBinary: ${someNumber.toString(2)}`);
console.log(typeof someNumber.toString(2));
console.log(`\nHex: ${someNumber.toString(16)}`);
console.log(typeof someNumber.toString(16));

console.log('\nConvert a string to a number');
console.log(parseInt('3.33e+2'));
console.log(parseFloat('3.33e+2'));
console.log(parseFloat('3.14'));
console.log(parseInt('7b', 16));
console.log(parseInt('0x7B', 16));
console.log(typeof parseInt('0x7B', 16));

console.log(Number('3.33e+2'));
console.log(typeof Number('3.33e+2'));

export {};
