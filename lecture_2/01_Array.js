// array    ---->in javaScript array is a similar and dissimilar or diffrent types of collection of object that is called array     and array is resizwable in Javascript in that means size of array can be change after declaration

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)   //------> slice does not manipulate the original array, which means it does not change anything in the original array or Return a copy of the section of an array 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)    //-------> splice manipulate in the original array that means it changes in the original array
console.log("C ", myArr);
console.log(myn2);