function decimalToBinary(decimal) {

  let givenNumber = decimal;
  let binaryArray = [];

  while (givenNumber >= 2) {
    if (givenNumber % 2 === 0) {
      binaryArray.unshift('0');
    } else {
      binaryArray.unshift('1');
    }
    givenNumber = Math.floor(givenNumber / 2);
  }
  binaryArray.unshift('1');
  return binaryArray.join('');
}