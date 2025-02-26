//           node 01_basics/stackAndHeapMemory.js            //

/*
Stack (Primitive):
Kaam: Ye fast aur ordered memory hoti hai jo Primitive Data Types (String, Number, Boolean, Undefined, Null, Symbol, BigInt) ko store karti hai.
Structure: LIFO (Last In, First Out) kaam karta hai.
Access: Direct aur fast hota hai.
*/

let name = "Shivam"

let myName = "name"
myName = "Shivam Singh"

// console.log(name);
// console.log(myName);

// Example:

let a = 10;  // Number (Primitive)
let b = a;   // `b` ko `a` ka ek copy milta hai

b = 20; // Hum `b` ko change karte hain, par `a` me koi change nahi hoga

console.log(a); // Output: 10
console.log(b); // Output: 20



/*
Heap (Non-Primitive):
Kaam: Ye memory Non-Primitive Data Types (Objects, Arrays, Functions) ke liye use hoti hai.
Structure: Ye unordered aur dynamic hoti hai.
Access: Indirect access (Reference) se hota hai, jo thoda slow hota hai.
*/

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@google.com"

// console.log(userOne.email);
// console.log(userTwo.email);

// Example:

let obj1 = { name: "Rahul" };  
let obj2 = obj1;  // `obj2` ko `obj1` ka reference milta hai  

obj2.name = "Amit";  // Dono me change hoga, kyunki reference same hai  

console.log(obj1.name); // Output: Amit  
console.log(obj2.name); // Output: Amit  
