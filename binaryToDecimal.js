function binaryToDecimal(binary) {
  let givenNumber = String(binary);
  let resultDecimal = 0;
  let indices = 0;

  for (let i = givenNumber.length - 1; i >= 0; i--) {
    if (givenNumber[i] === '1') {
      resultDecimal += 2 ** indices;
    }
    indices++;
  }
  
  console.log(resultDecimal)
  return resultDecimal;
}