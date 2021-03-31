let result = 0

const Bonus = (cokelat) => { //12
    // cara pertama 
    // try {
    //     // 60 = 60 + 12 hasilnya 72
    //     result = result + cokelat
    //     // 12 / 5 hasilnya 2
    //     const divide = Math.floor(cokelat / 5)
    //     // dicek 2 > 5
    //     if(divide > 5) 
    //     return Bonus(divide) // lempar 12
    //     if(divide % 5 === divide) {
    //         //72 = 72 + 2 //hasilnya 4
    //         result = result + divide}
    //     return Math.ceil(result)
    // }
    // finally {
    //     // reset ulang variable result ke 0
    //         result = 0
    // }
//  cara kedua
if(cokelat < 5) {
        return cokelat
    } else {
        const coklatBonus = Math.floor(cokelat / 5)
        console.log(cokelat + Bonus(coklatBonus))
        return cokelat + Bonus(coklatBonus)
    }
};
 
 const test = (testCase, result) => {
     if (testCase !== result) return console.log(false);
     return console.log(true);
 };
 
 test(Bonus(60), 74);
//  test(Bonus(100), 124);
//  test(Bonus(1000), 1249);
//  test(Bonus(1234), 1539);