/*              node 02_basics/01_arrays.js              */

/*                     Arrays in JavaScript                         */

// ✅ Array create karne ke 2 tareeke

// 1️⃣ Normal way se array declare karna
const myArr = [0, 1, 2, 3, 4, 5];  

// 2️⃣ Array constructor ka use karke array banana
const myArr2 = new Array(1, 2, 3, 4); 

// ✅ String values wala array
const myHeros = ["Thor", "Ironman", "Hulk", "Loki"]; 

console.log(myArr);    // Output: [0, 1, 2, 3, 4, 5]
console.log(myArr[1]); // Output: 1 (Indexing 0 se start hoti hai)
console.log(myHeros);  // Output: ["Thor", "Ironman", "Hulk", "Loki"]
console.log(myArr2);   // Output: [1, 2, 3, 4]


/*                     Array Methods                         */

// ✅ `push()` -> Array ke last me value add karta hai
myArr.push(6); 
myArr.push(7);

// ✅ `pop()` -> Array ke last element ko remove karta hai
myArr.pop();  

console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6]


// ✅ `unshift()` -> Array ke starting me value add karta hai
myArr.unshift(9);  

// ✅ `shift()` -> Array ke first element ko remove karta hai
myArr.shift();  

console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6]


// ✅ `includes(value)` -> Check karta hai ki value array me hai ya nahi (true/false return karega)
console.log(myArr.includes(8)); // Output: false

// ✅ `indexOf(value)` -> Koi bhi value ka index find karne ke liye
console.log(myArr.indexOf(3)); // Output: 3


/*                     Join Method                         */

// ✅ `join()` -> Array ko string me convert karta hai (comma separated by default)
const newArr = myArr.join();  

console.log(myArr);   // Output: [0, 1, 2, 3, 4, 5, 6]
console.log(newArr);  // Output: "0,1,2,3,4,5,6"


/*                     Slice vs Splice                         */

// ✅ `slice(start, end)`
// Ye original array ko change nahi karta, sirf ek naya array return karta hai

console.log("A", myArr); // Output: A [0, 1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1, 3); // Index 1 se start karega, but 3 se pehle tak lega

console.log(myn1);       // Output: [1, 2]
console.log("B", myArr); // Output: B [0, 1, 2, 3, 4, 5, 6] (Original array same hai)


// ✅ `splice(start, count)`
// Ye original array me changes karta hai (elements ko remove ya add kar sakta hai)

const myn2 = myArr.splice(1, 3); // Index 1 se start karega, aur 3 elements remove karega

console.log("C", myArr); // Output: C [0, 4, 5, 6] (Original array change ho gaya)
console.log(myn2);       // Output: [1, 2, 3] (Ye removed elements ka array hai)


// 📝 **Difference Between `slice()` and `splice()`**:
// - ✅ `slice()` **original array ko modify nahi karta**  
// - ✅ `splice()` **original array me se elements remove ya add kar sakta hai**




/*              📌 Important Notes in Comments:             

✔ .push() & .pop() -> Elements ko add/remove karta hai (last se).
✔ .unshift() & .shift() -> Elements ko add/remove karta hai (start se).
✔ .includes() -> Check karta hai ki value array me hai ya nahi.
✔ .indexOf() -> Kisi value ka index find karta hai.
✔ .join() -> Array ko string me convert karta hai.
✔ .slice() -> Naya array return karta hai (original array ko modify nahi karta).
✔ .splice() -> Original array ko modify karta hai (remove/add karta hai).

*/