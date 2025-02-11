/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-console */

const userName = 'maQ';
const userAge = 20;

console.log('\nIf/else statement');
if (userAge < 18) {
  console.log(`${userName} is a child`);
} else {
  console.log(`${userName} is an adult`);
}

console.log('\nTernary/conditional operator');

let userDescription = userAge < 18 ? 'a child' : 'an adult';
console.log(`${userName} is ${userDescription}`);

userDescription = userAge < 18 ? (userAge > 1 ? 'a child' : 'a baby') : 'an adult';
console.log(`${userName} is ${userDescription}`);

console.log(`${userName} is ${userAge < 18 ? 'a child' : 'an adult'}`);

console.log('\nRelational operators');

console.log(10 > 12); //Greater than
console.log(10 < 11); //Lesser than

console.log(10 >= 12); //Greater than or equal to
console.log(10 <= 10); //Lesser than or equal to

console.log(10 == 10); //Equal
console.log(10 != 10); //Not equal

console.log(10 === 10); //Equal with type check
console.log(10 !== 10); //Not equal with type check

// console.log('10' == userAge);

export {};
