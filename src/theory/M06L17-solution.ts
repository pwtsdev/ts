/* eslint-disable no-console */

/* GENERAL RULES:
  - on top of this file, there is THE ONLY eslint exception that is allowed
  - your final code cannot have any warnings or errors
  - you can use this file to add code bellow comments that describes tasks
  - don't forget to add a proper code block "fix" at the end of the file
*/

/* TASK:

Create a function that will check if provided PESEL number is correct.
Provided code should implements following points:
- function output should be true or false depending on PESEL number being valid or not
- PESEL should be provided as a string to the function
- PESEL number and it's validation result should be displayed in the terminal

PESEL number contains 10 digits:
- digits 1-10 are regular digits (with multiply weight as follows: 1 3 7 9 1 3 7 9 1 3)
- digits 1-2 describes person birth year
- digits 3-4 describes person birth month
- digits 5-6 describes person birth day
- digits 7-10 describes person sex (even number defines male, odd number defines female)
- digit 11 is a check sum

To calculate a check sum of the given PESEL number you have to:
- calculate a sum of digits 1-10 multiply by number weight
- calculated sum then have to be divided by 10 (you need to capture a division reminder)
- subtract reminder of the division from 10 and this should be equal to the last digit (check sum)

Example PESEL numbers to check:
- 79122077229 - female
- 05282386916 - male
- 82040744636 - invalid
*/

function checkPesel(pesel: string): boolean {
  const peselWeights: number[] = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  const peselArray: string[] = Array.from(pesel);
  const crc = peselArray[10];
  const sex = peselArray.slice(6, 10).join('');

  console.log(`PESEL to check: ${pesel}`);
  console.log(peselArray);
  console.log(`CRC: ${crc}`);

  console.log(`Birth year: ${peselArray.slice(0, 2).join('')}`);
  console.log(`Birth month: ${peselArray.slice(2, 4).join('')}`);
  console.log(`Birth day: ${peselArray.slice(4, 6).join('')}`);
  console.log(`Sex: ${parseInt(sex) % 2 ? 'male' : 'female'}`);

  let calcCrc = 0;
  for (let i = 0; i < peselWeights.length; i++) {
    calcCrc += parseInt(peselArray[i]) * peselWeights[i];
  }

  calcCrc %= 10;
  calcCrc = 10 - calcCrc;
  console.log(`Calculated CRC: ${calcCrc.toString()}`);

  return calcCrc.toString() === crc ? true : false;
}

console.log(checkPesel('79122077229')); //Female
console.log(checkPesel('05282386916')); //Male
console.log(checkPesel('82040744636')); //Invalid

export {};
