/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-inferrable-types */

const firstName: string = 'Peter';
const lastName: string = 'Parker';

console.log(firstName);
console.log(lastName);

console.log('\nConcatenation');
let text: string = firstName + ' ' + lastName + ' is the Spider-Man';
console.log(text);

text = firstName;
text += ' ';
text += lastName;
text += ' is the Spider-Man';
console.log(text);

console.log(firstName.concat(' '.concat(lastName.concat(' is the Spider-Man'))));

console.log('\nTemplate strings with backtick');
text = `${firstName} ${lastName} is the Spider-Template`;
console.log(text);

export {};
