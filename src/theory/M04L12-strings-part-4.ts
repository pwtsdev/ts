/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-inferrable-types */

const text: string = 'Peter Parker is the Spider-Man';

console.log('\nSearch for a text');
console.log(text.includes('Spider'));
console.log(text.includes('spider'));
console.log(text.search(/spider/gi));
console.log(text.search(/spidero/gi));

console.log('\nExample on how to use');
const spiderStart: number = text.search(/spider/gi);
const spiderText: string = 'Spider-Man';
const spiderStop: number = spiderStart + spiderText.length;

console.log(text.substring(spiderStart, spiderStop));
console.log(
  `${spiderText} starts at ${spiderStart.toString()} character and ends at ${spiderStop.toString()} character`,
);

export {};
