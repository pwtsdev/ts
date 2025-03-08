/* eslint-disable no-console */

const names: string[] = ['Tytus', 'Romek', 'Atomek', 'Dora', 'Boots', 'Romek'];
console.log(names);

console.log('\nSearch for an element in an array');
console.log(names.indexOf('Romek'));
console.log(names.lastIndexOf('Romek'));

console.log('\nCheck if an element exists in an array');
console.log(names.includes('Romek'));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function findWordsWithOmek(value: string, index: number, array: string[]): unknown {
  console.log(`=> ${value} <=`);
  return value.includes('omek');
}

console.log('\nAdditional methods to find with conditions');
console.log('\nfind:');
console.log(names.find(findWordsWithOmek));
console.log('\nfindIndex');
console.log(names.findIndex(findWordsWithOmek));
console.log('\nfindLastIndex');
console.log(names.findLastIndex(findWordsWithOmek));
console.log('\nfilter');
console.log(names.filter(findWordsWithOmek));
console.log('\nevery');
console.log(names.every(findWordsWithOmek));
console.log('\nsome');
console.log(names.some(findWordsWithOmek));

export {};
