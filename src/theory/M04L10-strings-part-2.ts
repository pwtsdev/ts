/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let text: string = 'Peter Parker is the Spider-Man';

console.log('\nLower case');
console.log(text.toLowerCase());

console.log('\nUpper case');
console.log(text.toUpperCase());

console.log('\nReplace');
console.log(text.replace('Peter Parker', 'Miles Morales'));

console.log('\nReplace All');
console.log(text.replaceAll('a', 'A'));
console.log(text.replaceAll(' ', '_'));
console.log(text.replaceAll('P', ''));

console.log('\nLength');
console.log(text.length);

console.log('\nPad');
console.log(`>${text}<`);

text = text.padStart(text.length + 1, ' ');
console.log(`>${text}<`);

text = text.padEnd(text.length + 1, ' ');
console.log(`>${text}<`);

console.log('\nTrim');
console.log(`>${text.trimStart()}<`);
console.log(`>${text.trimEnd()}<`);
console.log(`>${text.trim()}<`);

export {};
