/* eslint-disable no-console */

function checkPesel(pesel: string): boolean {
  console.log(`PESEL to check: ${pesel}`);

  const year = pesel.substring(0, 2);
  console.log(`Birth year: ${year}`);

  const month = pesel.substring(2, 4);
  console.log(`Birth month: ${month}`);

  const day = pesel.substring(4, 6);
  console.log(`Birth day: ${day}`);

  const sex = pesel.substring(6, 10);
  console.log(`Sex: ${parseInt(sex) % 2 ? 'male' : 'female'}`);

  const crc = pesel.substring(10);
  console.log(`CRC: ${crc}`);

  let calcCrc: number = parseInt(pesel.substring(0, 1)) * 1;
  calcCrc += parseInt(pesel.substring(1, 2)) * 3;
  calcCrc += parseInt(pesel.substring(2, 3)) * 7;
  calcCrc += parseInt(pesel.substring(3, 4)) * 9;
  calcCrc += parseInt(pesel.substring(4, 5)) * 1;
  calcCrc += parseInt(pesel.substring(5, 6)) * 3;
  calcCrc += parseInt(pesel.substring(6, 7)) * 7;
  calcCrc += parseInt(pesel.substring(7, 8)) * 9;
  calcCrc += parseInt(pesel.substring(8, 9)) * 1;
  calcCrc += parseInt(pesel.substring(9, 10)) * 3;

  calcCrc %= 10;
  calcCrc = 10 - calcCrc;
  console.log(`Calculated CRC: ${calcCrc.toString()}`);

  if (calcCrc.toString() === crc) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPesel('79122077229')); //Female
console.log(checkPesel('05282386916')); //Male
