/*           node 02_basics/02_array.js               */

/*                     Array Manipulation in JavaScript                         */

const marval_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// ✅ `push()` se array ke andar doosra array daalna (Nested array create hoga)
marval_heros.push(dc_heros);

console.log(marval_heros); 
// Output: ["thor", "Ironman", "Spiderman", ["superman", "flash", "batman"]]
// ❌ Ye ek nested array ban gaya hai, jo generally useful nahi hota

// ✅ Nested array me se kisi specific element ko access karna
console.log(marval_heros[3][2]); 
// Output: "batman"  (Index 3 par array hai, aur uske index 2 ka element)

// ❌ Upar wale tareeke se avoid karna chahiye, kyunki ye array ko nested bana deta hai


/*                     Merge Arrays Properly                         */

// ✅ `concat()` method se 2 arrays ko merge karna (New array return hota hai)
const allHeros = marval_heros.concat(dc_heros);
console.log(allHeros); 
// Output: ["thor", "Ironman", "Spiderman", ["superman", "flash", "batman"], "superman", "flash", "batman"]
// ❌ Ye bhi problem create kar sakta hai kyunki `marval_heros` me nested array pehle se hai

// ✅ `spread operator (...)` se arrays ko properly merge karna (Recommended way)
const all_new_heros = [...marval_heros, ...dc_heros];
console.log(all_new_heros);  
// Output: ["thor", "Ironman", "Spiderman", ["superman", "flash", "batman"], "superman", "flash", "batman"]
// ❌ Pehle se nested array hai to ye bhi usko include kar lega

// 🔥 **Better approach**: Spread operator tab use karein jab arrays normal ho


/*                     Flattening Nested Arrays                         */

// ✅ `flat(depth)` method se nested arrays ko ek single array me convert karna
const another_array = [1, 2, 3, [4, 5, 6, 7], 1, [5, 4, [6, 7]]];

// `Infinity` depth dene se sare nested elements ek hi array me convert ho jayenge
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);  
// Output: [1, 2, 3, 4, 5, 6, 7, 1, 5, 4, 6, 7]


/*                     Useful Array Methods                         */

// ✅ `Array.isArray(value)` -> Check karta hai ki value array hai ya nahi
console.log(Array.isArray("Shivam"));  
// Output: false  ("Shivam" ek string hai, array nahi)

// ✅ `Array.from(value)` -> Kisi bhi value ko array me convert karta hai
console.log(Array.from("Shivam"));  
// Output: ['S', 'h', 'i', 'v', 'a', 'm']  (String ko character array me convert kar diya)

// ✅ `Array.from({name: "Shivam"})` -> Ye object ko array me convert karne ki koshish karega
console.log(Array.from({name: "Shivam"}));  
// Output: []  (Empty array, kyunki object ko direct array me convert nahi kiya ja sakta)
// ❗ Important: Object ko array me convert karne ke liye keys ya values separately pass karni padti hai


/*                     Array.of() Method                         */

// ✅ `Array.of(value1, value2, value3, ...)` se ek naya array create hota hai
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  
// Output: [100, 200, 300]  (Alag-alag values ko array me convert kar diya)



/*
📌 Important Notes in Comments:
✔ .push(array) se array ke andar ek aur array chala jata hai (Nested array).
✔ .concat() arrays ko merge karta hai, lekin naye array me return karta hai.
✔ spread operator (...) best hai arrays ko merge karne ke liye.
✔ .flat(Infinity) deeply nested arrays ko single array me convert kar deta hai.
✔ Array.isArray() se check hota hai ki koi value array hai ya nahi.
✔ Array.from(value) kisi bhi value ko array me convert kar deta hai (Strings ke liye useful).
✔ Array.of(value1, value2, ...) alag-alag values se naya array banata hai.
*/