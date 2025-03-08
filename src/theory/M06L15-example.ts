/* eslint-disable no-console */

function checkNip(nip: string): boolean {
  const nipWeights: number[] = [6, 5, 7, 2, 3, 4, 5, 6, 7];
  const nipArray: string[] = Array.from(nip);
  const crc = nipArray[9];

  console.log(`\nNIP to check: ${nip}`);
  console.log(nipArray);
  console.log(`CRC: ${crc}`);

  let calcCrc = 0;
  for (let i = 0; i < nipWeights.length; i++) {
    calcCrc += parseInt(nipArray[i]) * nipWeights[i];
  }
  calcCrc %= 11;

  console.log(`Calculated CRC: ${calcCrc.toString()}`);

  return calcCrc.toString() === crc ? true : false;
}

console.log(checkNip('6017383517'));
console.log(checkNip('1127345656'));
console.log(checkNip('1217041120'));

export {};
