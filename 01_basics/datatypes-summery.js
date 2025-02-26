/*           Data Types             */
// Datatypes programming ka ek basic concept hai jo batata hai ki kisi variable ka data kis type ka hoga.

//      Primitive DataTypes    

// 7 types : String, Number, Boolearn, null, undefined, Symbol, bigNumber

// String → Jab aap text ya characters store karte ho.
let name = "Amit"; // Yeh ek string hai
let city = 'Delhi'; // Single ya double quotes dono chalenge

// Number → Jab aap numbers store karte ho (integer, decimal dono).
let age = 25; // Integer number
let price = 99.99; // Decimal number

// Boolean → Jab sirf true ya false ka value store ho.
let isStudent = true; // Yeh ek boolean hai
let isRaining = false; // Yeh bhi boolean hai

// Undefined → Jab kisi variable ko define toh kar diya ho par value na di ho.
let x; // Yeh undefined hai
console.log(x); // Output: undefined

// Null → Jab aap jaan-bujh ke kisi variable ka value empty karna chahte ho.
let y = null; // Yeh null hai, iska matlab khali ya empty value

// Symbol (ES6) → Unique values create karne ke liye use hota hai.
let uniqueId = Symbol("id"); 

// BigInt (ES11) → Bahut bade numbers store karne ke liye.
let bigNumber = 123456789012345678901234567890n; 

//        Reference or Non-Primitive Data Type (Complex aur Mutable hote hain)

// Array, Objects, Functions

// Object → Multiple values ek sath store karne ke liye.
let person = { name: "Rahul", age: 30, city: "Mumbai" };

// Array ->
const heroes = ["shaktiman", "krish", "doga"];

// Function ->
const myFunction = function(){
    // console.log("Hello world");    
}

console.log(typeof bigNumber);
console.log(typeof y);
console.log(typeof price);
console.log(typeof myFunction);
console.log(typeof heroes);
console.log(typeof uniqueId);



// Source // https://262.ecma-international.org/5.1/#sec-11.4.3