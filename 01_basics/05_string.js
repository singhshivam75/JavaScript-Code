/*             node 01_basics/05_string.js                 */

/*                     Strings in JavaScript                         */

const name = "Shivam";
const repoCount = 50;

// ⚠️ Old method: String concatenation (Avoid using + for joining strings)
console.log(name + repoCount + " Value");  
// Output: Shivam50 Value
// Note: Is tarike se string aur variables ko jodna purana tareeka hai, ise avoid karna chahiye

// ✅ New method: Template literals (Recommended way to handle strings)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// Output: Hello my name is Shivam and my repo count is 50
// Note: Yeh naya tareeka hai strings ko dynamically likhne ka, jisme `${}` ke andar variable use kar sakte hain.


/*                     String Object in JavaScript                         */

// String ko object ki tarah declare karna (new String() se)
const gameName = new String('Shivam-hc');

// String ke 0th index ka character print karna
console.log(gameName[0]);  // Output: S
// Note: Yeh string ek array ki tarah behave karti hai, jisme har ek character ka ek index hota hai.

// String ka prototype property check karna
console.log(gameName.__proto__); 
// Output: {} (Prototype object jo JavaScript ke internal methods aur properties ko dikhata hai)

// String ki length check karna
console.log(gameName.length);  // Output: 9
// Note: `.length` ka use karke hum string me total characters ki sankhya jaan sakte hain.

// String ko uppercase me convert karne ka method
console.log(gameName.toUpperCase()); 
// Output: SHIVAM-HC
// Note: `.toUpperCase()` se hum string ke sare characters ko capital letters me badal sakte hain.

// Koi specific index ka character check karna
console.log(gameName.charAt(3));  // Output: v
// Note: `.charAt(index)` ek specific position ka character return karta hai.

// Kisi character ka index find karna (pehli baar jo milega)
console.log(gameName.indexOf('a'));  // Output: 5
// Note: `.indexOf('char')` kisi bhi character ka first occurrence ka index return karta hai.


/*                     String Methods                         */

// ✅ `substring(start, end)`: Start se lekar end se pehle tak ka part return karta hai
const newString = gameName.substring(0, 4);
console.log(newString);  // Output: Shiv
// Note: `substring()` me negative values allow nahi hoti, sirf positive index kaam karega.

// ✅ `slice(start, end)`: Negative index use kar sakte hain
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);  // Output: h
// Note: `slice()` method me negative index ka support hota hai, jisme counting right se hoti hai.


/*                     Trim Method (Extra spaces hatane ke liye)                         */

const newStringOne = "        Shivam       ";

console.log(newStringOne);        // Output: "        Shivam       " (Spaces included)
console.log(newStringOne.trim()); // Output: "Shivam" (Spaces removed)
// Note: `.trim()` method string ke aage aur peeche ke extra spaces hata deta hai.


/*                     Replace Method                         */

const url = "https://shivam.com/shivam%20singh";

// `%20` ko `_` se replace karna
console.log(url.replace('%20', '_'));  
// Output: "https://shivam.com/shivam_singh"
// Note: `.replace('oldValue', 'newValue')` kisi bhi part ko naye value se replace karne ke liye use hota hai.


/*                     Includes Method                         */

// Check karna ki ek word string me hai ya nahi
console.log(url.includes('shivam')); // Output: true
console.log(url.includes('rajan'));  // Output: false
// Note: `.includes('word')` check karta hai ki diya gaya word string me exist karta hai ya nahi.
// Agar milta hai to `true`, warna `false` return karega.


/*                     Split Method                         */

// Split method se string ko array me todna
console.log(gameName.split('-'));  
// Output: [ 'Shivam', 'hc' ] (Dash `-` ke basis pe tod diya)
// Note: `.split('separator')` method kisi bhi delimiter ke base pe string ko array me tod deta hai.
