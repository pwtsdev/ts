/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-inferrable-types */

const text: string = 'Peter Parker is the Spider-Man';

console.log('\nSubtraction');
// eslint-disable-next-line @typescript-eslint/no-deprecated
console.log(text.substr(20)); //Spider-Man
console.log(text.substring(20)); //Spider-Man
console.log(text.slice(20));

console.log(text.substring(20, 26)); //Spider
console.log(text.slice(20, 26));

console.log('\nSplit');
console.log(text.split(' ')); //[ 'Peter', 'Parker', 'is', 'the', 'Spider-Man' ]
console.log(text.split('a'));

console.log('\nGet single character');
console.log(text.charAt(1));

console.log('\nIndex of element');
console.log(text.indexOf('e'));
console.log(text.lastIndexOf('e'));

console.log('\nGet character code');
console.log(text.charCodeAt(1));
console.log('©'.charCodeAt(0));
console.log(''.charCodeAt(0));

export {};
