let count,
result = 0;

const Bonus = (cokelat) => {
   try {
       result += cokelat
       const divide = Math.floor(cokelat / 5)
       if(divide > 5) return Bonus(divide)
       if(divide % 5 === divide) result += divide
       return Math.floor(result)
   } finally {
           result = 0
   }

};

const test = (testCase, result) => console.log(testCase === result)


test(Bonus(60), 74);
test(Bonus(100), 124);
test(Bonus(1000), 1249);
test(Bonus(1234), 1539);

