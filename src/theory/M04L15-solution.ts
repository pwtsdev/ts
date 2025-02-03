/* eslint-disable no-console */

/* GENERAL RULES:
  - on top of this file, there is THE ONLY eslint exception that is allowed
  - your final code cannot have any warnings or errors
  - you can use this file to add code bellow comments that describes tasks
  - don't forget to add a proper code block "fix" at the end of the file
*/

/* TASK 1:
  - create 2 variables that contains following texts: "TypeScript" and "hard"
  - create 1 variable that is a template string and that will produce a following text
    (remember to use 2 variables created before):
    "TypeScript is a programming language hard to learn"
  - print this variable in the terminal
*/

const language = 'TypeScript';
const difficulty = 'hard';

let text = `${language} is a programming language ${difficulty} to learn!`;
console.log(text);

/* TASK 2:
  - in the text from task 1, replace "hard" with "easy"
  - print this variable in the terminal
*/

text = text.replace('hard', 'easy');
console.log(text);

/* TASK 3:
  - create a variable that will store a length of the text from task 1
  - print this variable in the terminal but use template string that will produce,
    following output: "Text is ## characters long" (where ## is a value from a variable)
*/

const textLength = text.length;
console.log(`Text is ${textLength.toString()} characters long`);

/* TASK 4:
  - check if text from task 1 contains a word "age" (print the result in the terminal)
*/

console.log(text.includes('age'));

/* TASK 5:
  - create a variable that will contain a number that is in the middle of the text from task 1
    (use variable from a task 3 to calculate it)
  - print this variable in the terminal
*/

const position = textLength / 2;
console.log(position);

console.log(text.substring(0, position));
console.log(text.substring(position + 1));

/* TASK 6:
  - print in the terminal a character that is in the middle of the text from task 1
    (use variable from task 5)
  - print in the terminal an unicode of the character that is in the middle of the text
    from task 1 (use variable from task 5)
*/

console.log(text.charAt(position));
console.log(text.charCodeAt(position));

export {};
