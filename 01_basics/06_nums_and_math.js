/*            node 01_basics/06_nums_and_math.js           */


/*             Number in JavaScript                          */

// Ek simple number variable
const score = 400;
console.log(score); // Output: 400

// Number object ka use karke number create karna
const newNum = new Number(100);
console.log(newNum); // Output: [Number: 100]

// Number ko string me convert karke uski length check karna
console.log(newNum.toString().length);  // Output: 3 (kyunki "100" me 3 characters hain)

// Number ko fixed decimal places tak round karna
console.log(newNum.toFixed(2)); // Output: "100.00" (2 decimal places tak round)

const otherNumber = 651.115;

// Precision method ka use karke sirf important digits lena
console.log(otherNumber.toPrecision(3)); // Output: "651" (Sirf 3 significant digits show honge)

const hundreds = 10000000;

// Number ko Indian format me comma ke sath dikhana
console.log(hundreds.toLocaleString('en-IN')); // Output: "1,00,00,000" (Indian Number System)

/*                      Math Object in JavaScript                           */

console.log(Math); // Math object ki properties aur methods dekhne ke liye

// Absolute value lena (negative ko positive me convert karta hai)
console.log(Math.abs(-4)); // Output: 4

// Nearest integer tak round karna
console.log(Math.round(4.6)); // Output: 5 (4.6 ko nearest integer 5 me round karega)

// Ceiling method (Hamesha upar wale integer tak round karega)
console.log(Math.ceil(4.2)); // Output: 5

// Floor method (Hamesha neeche wale integer tak round karega)
console.log(Math.floor(4.9)); // Output: 4

// Minimum value find karna
console.log(Math.min(4, 3, 6, 7, 1)); // Output: 1 (Sabse chhota number)

// Maximum value find karna
console.log(Math.max(4, 3, 6, 7, 1)); // Output: 7 (Sabse bada number)

// Random number generate karna (0 aur 1 ke beech koi bhi random number)
console.log(Math.random()); // Output: 0.XXXX (Har baar naya value)

// 1 se 10 ke beech random number generate karna
console.log((Math.random() * 10) + 1); // Output: 1 se 10 ke beech koi bhi number

// 1 se 10 ke beech ka integer random number generate karna
console.log(Math.floor(Math.random() * 10) + 1); // Output: 1 se 10 tak koi bhi random integer

// Kisi bhi range (min to max) ke beech random number generate karna
const min = 10;
const max = 20;

// min aur max ke beech ka random integer generate karna
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// Output: 10 se 20 ke beech ka koi bhi random number
