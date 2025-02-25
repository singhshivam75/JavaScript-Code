let score = "33" // string
let scores = 33 // number

// console.log(typeof score);
// console.log(typeof(scores));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

// number + string

let number = "14vbn"

let valueInNumbers = Number(number);
// console.log(typeof valueInNumbers);
// console.log(valueInNumbers);

// null

let numbers = null

let valueInNumberss = Number(numbers);
// console.log(typeof valueInNumberss);
// console.log(valueInNumberss);

// undefined

let unknow = undefined

let valueInNumbeR = Number(unknow);
// console.log(typeof valueInNumbeR);
// console.log(valueInNumbeR);

// node 01_basics/03_conversionOperation.js

// boolen

let boolens = true

let valueInNumBER = Number(boolens);
// console.log(typeof valueInNumBER);
// console.log(valueInNumBER);

// boolen

let boolen = false

let valueInNumbER = Number(boolen);
// console.log(typeof valueInNumbER);
// console.log(valueInNumbER);

// string 

let string = "Shivam"

let valueInNumbERs = Number(string);
// console.log(typeof valueInNumbERs);
// console.log(valueInNumbERs);

// "33" => 33
//"33vbn" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

/*
1 => true
0 => false
"" => false
"Shivam" => true
*/

let someNumber = 33;

let stringNumber = String(someNumber)
// console.log(stringNumber); // number
// console.log(typeof stringNumber); // string


// ******************* Oprations ********************

let value = 3
let nagValue = -value
// console.log(nagValue);


// Numericals type

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "Shivam"
let str2 = " Singh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3+4) * 5 % 3);

// console.log(+true); // try no use
// console.log(+""); // wrong way

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // not correct way


/*      Increment (++)      */

let gameCounter = 100
gameCounter++;
// console.log(gameCounter);

let gameCounters = 100
++gameCounters;
// console.log(gameCounters);


let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

let c = 5;
console.log(c++); // 5 (returns the original value, then increments)
console.log(c);   // 6 (x is now incremented)

let d = 5;
console.log(++d); // 6 (increments first, then returns the value)
console.log(d);   // 6 (y remains incremented)
