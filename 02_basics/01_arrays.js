/*              node 02_basics/01_arrays.js              */

//             array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Thor", "Ironman", "Hulk", "Loki"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr);
// console.log(myArr[1]);
// console.log(myHeros);
// console.log(myArr2);

//              Array methods

// myArr.push(6)  // add value
// myArr.push(7)
// myArr.pop()   // remove last value
// console.log(myArr);

// myArr.unshift(9)  // add value before array start
// myArr.shift()  // remove first value
// console.log(myArr);
// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

//            sloce, splice

console.log("A", myArr);

const myn1 =myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);

// difference slice and splice