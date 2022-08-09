let binaryNumber = prompt("Type binary number:", "1010001001");
function convertToInteger(str) {

  let convertedInt = parseInt(binaryNumber, 2);
  return convertedInt;
}

let number = convertToInteger("1001");
 console.log(`Binary Number: ${binaryNumber}`);
console.log(`Decimal Number: ${number}`);
