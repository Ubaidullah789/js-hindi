"use strict"
let score = "hitest"
console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);   // NaN is Not a Number  


// "33" -- 33
// "33acc" -- NaN    but type is number

// true -- 1 ... false = 0

let isLoggedIn = undefined
let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(isLoggedIn);
console.log(BooleanIsLoggedIn);


let aNumber = 33
let StrNum = String(aNumber)
console.log(StrNum);
console.log(typeof StrNum);




