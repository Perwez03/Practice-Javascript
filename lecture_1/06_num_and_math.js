const score = 778
// console.log(score);      //----->778

const balance = new Number(234)      
// console.log(balance);      //-----> [number:234]

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));              //-----> after decimal it takes only two digit from left to rigth

const otherNumber = 667.87665

// console.log(otherNumber.toPrecision(4));      //-------> takes only 4 digit left hand side

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));     //-----> 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);       //-----> 1-9 and some decimal
console.log(Math.floor(Math.random()*10) + 1);     //----->  1-9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)