/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-console */

const userName = 'maQ';
const userAge = 20;

console.log('If statement');
if (userAge < 18) {
  console.log(`${userName} is a child`);
}

console.log('\nIf/else statement');
if (userAge < 18) {
  console.log(`${userName} is a child`);
} else {
  console.log(`${userName} is an adult`);
}

console.log('\nMultiple if/else statement');
if (userAge <= 1) {
  console.log(`${userName} is a baby`);
} else if (userAge < 18 && userAge > 1) {
  console.log(`${userName} is a child`);
} else {
  console.log(`${userName} is an adult`);
}

export {};
