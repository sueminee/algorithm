function findPrimeFactors() {
  const memo = [];

  return {
    fn: (number) => {

      const primeNumbers = ['2', '3', '5', '7', '11', '13', '17', '19', '23', '29', '31', '37', '41', '43', '47', '53', '59', '61', '67', '71', '73', '79', '83', '89', '97'];
      let i = 0;
      let target = number;
      const factorData = {}

      while (primeNumbers[Number(i)] <= target) {
        var prime = primeNumbers[Number(i)];
        if (target % prime === 0) {
          memo.push(prime);
          target = target / prime;
          factorData[prime] = factorData[prime] ? factorData[prime] + 1 : 1;
        } else {
          i++;
        }
      }
      return factorData;
    },
    getmemo: memo,
  };
}

function getLeastCommonNumber(_arr) {
  const { fn, getmemo } = findPrimeFactors();
  const arr = _arr.map(item => fn(item));


  const uniqueValues = Array.from(new Set(getmemo));

  let res = 1;
  let tmp = 1;

  for (let i = 0; i < uniqueValues.length; i++) {
    const element = uniqueValues[i];

    for (let j = 0; j < arr.length; j++) {
      const obj = arr[j];

      for (const key in obj) {
        if (key === element) {
          if (obj[key] > tmp) {
            tmp = obj[key];
          }
        }
      }
    }

    res *= Number(element) ** Number(tmp);
    tmp = 1;
  }
  // console.log('res: ', res);
  return res
}

// getLeastCommonNumber([2, 6, 16, 17])  // 816

const { fn, getmemo } = findPrimeFactors();
console.log(fn(18), getmemo)
// { '2': 1, '3': 2 } [ '2', '3', '3' ]
