const name="Perwez"
const inta="perwezalam601"

// console.log(name + inta + "Is a instagram acoount")  this is node a conventional way of writing the code this is oldest way of writing of the code

console.log(`my name ${name} and my insta account is ${inta} u can follow me`)


const gameName = new String('pereza-hc-com')

// console.log(gameName[0]);       ----> outpot p
// console.log(gameName.__proto__);   -------> {}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://perwez.com/perwez%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));