/*              node 01_basics/07_datesinJS.js               */

/*                     Date Object in JavaScript                         */

// ✅ `new Date()` se current date aur time get karna
let myDate = new Date();
console.log(myDate); 
// Output: Complete date object (Fri Feb 25 2025 12:34:56 GMT+0530 (India Standard Time))

// ✅ `toString()` method se readable format me date convert karna
console.log(myDate.toString()); 
// Output: Fri Feb 25 2025 12:34:56 GMT+0530 (India Standard Time)

// ✅ `toDateString()` method sirf date ka readable format return karta hai
console.log(myDate.toDateString()); 
// Output: Fri Feb 25 2025

// ✅ `toLocaleString()` method local time format me date aur time dikhata hai
console.log(myDate.toLocaleString()); 
// Output: 25/2/2025, 12:34:56 PM  (Indian format)

// ✅ JavaScript me Date object ka type "object" hota hai
console.log(typeof myDate); 
// Output: object


/*                     Custom Date Creation                         */

// ✅ `new Date(year, month, day)`: Custom date create karne ka tareeka
let myCreatedDate = new Date(2023, 0, 23); // Note: Month 0-based hota hai (0 = January)
console.log(myCreatedDate.toDateString()); 
// Output: Mon Jan 23 2023

// ✅ `new Date(year, month, day, hours, minutes)`: Time ke sath date set karna
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate1.toLocaleString()); 
// Output: 23/1/2023, 5:03:00 AM

// ✅ `new Date("YYYY-MM-DD")` format use karke date set karna
let myCreatedDate2 = new Date("2023-01-25");
console.log(myCreatedDate2.toLocaleString()); 
// Output: 25/1/2023, 12:00:00 AM

// ✅ `new Date("MM-DD-YYYY")` format bhi use ho sakta hai
let myCreatedDate3 = new Date("01-14-2023");
console.log(myCreatedDate3.toLocaleString()); 
// Output: 14/1/2023, 12:00:00 AM


/*                     Timestamps in JavaScript                         */

// ✅ `Date.now()` method current timestamp (milliseconds since Jan 1, 1970) return karta hai
let myTimeStamp = Date.now();
console.log(myTimeStamp); 
// Output: 1708422222222 (Milliseconds from 1 Jan 1970)

// ✅ Kisi bhi date ka timestamp get karna
console.log(myCreatedDate3.getTime()); 
// Output: 1673654400000

// ✅ `Date.now()` ko 1000 se divide karke seconds me convert karna
console.log(Math.floor(Date.now() / 1000));  
// Output: 1708422222 (Seconds from 1 Jan 1970)
// Note: Ye method timestamps compare karne ke liye useful hota hai


/*                     Date Methods                         */

let newDate = new Date();
console.log(newDate); 
// Output: Complete date object

// ✅ `.getMonth()` method month ka index return karta hai (0 = January, 1 = February...)
console.log(newDate.getMonth() + 1); 
// Output: 2 (Agar February chal raha ho to 1+1 = 2)

// ✅ `.getDay()` method week ka day return karta hai (0 = Sunday, 1 = Monday...)
console.log(newDate.getDay()); 
// Output: 3 (Agar Wednesday ho to 3)

// ✅ `.toLocaleString()` ke andar options pass karke day name nikalna
console.log(newDate.toLocaleString('default', { 
    weekday: "long",
})); 
// Output: Monday (Jo bhi current day hoga uska naam return karega)
