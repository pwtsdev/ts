/* eslint-disable no-console */

/* GENERAL RULES:
  - on top of this file, there is THE ONLY eslint exception that is allowed
  - your final code cannot have any warnings or errors
  - you can use this file to add code bellow comments that describes tasks
  - don't forget to add a proper code block "fix" at the end of the file
*/

/* TASK:

Create a function that will check if provided NIP number is correct.
Provided code should implements following points:
- function output should be true or false depending on NIP number being valid or not
- NIP should be provided as a string to the function
- NIP number and it's validation result should be displayed in the terminal

NIP number contains 10 digits:
- digits 1-9 are regular digits (with multiply weight as follows: 6 5 7 2 3 4 5 6 7)
- digit 10 is a check sum

To calculate a check sum of the given NIP number you have to:
- calculate a sum of digits 1-9 multiply by number weight
- calculated sum then have to be divided by 11
- reminder of the division should be equal to the last digit (check sum)

Example NIP numbers to check:
- 6017383517 - valid
- 1127345656 - valid
- 1217041120 - invalid
*/
