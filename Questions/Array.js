// 1. Find the length of an array

const fruits = ["apple", "mango", "banana", "pineapple", "graphs", "cherry"];
console.log(fruits.length);
/*
The .length property returns how many elements are in the array.
*/

// 2. Access the first and last element

const arr = [12, 23, 34, 45];
console.log(arr[0]);
console.log(arr[arr.length - 1]);
/*
First element is always at index 0.
Last element is at array.length - 1.
*/

// 3. Add elements to beginning and end

const add = ["apple", "mango", "banana", "pineapple"]
add.push("cherry")
add.unshift("graphs")
console.log(add);
/*
.push() adds at the end.
.unshift() adds at the beginning.
*/

// 4. Remove elements from beginning and end

const num = [5, 6, 7, 2];
num.pop()
num.shift()
console.log(num);

/*
.pop() removes from end.
.shift() removes from start.
*/

// 5. Check if a value exists

const color = ["red", "blue", "green", "yellow"]
console.log(color.includes("pink"));
console.log(color.includes("green"));
/*
.includes() checks if a value is present in the array and returns true or false.
*/

// 6. Find index of an element
const animals = ["cat", "dog", "cow", "rabbit"]
console.log(animals.indexOf("dog"));
console.log(animals.indexOf("cow"));
/*
.indexOf() returns the first index of the matching element, or -1 if not found.
*/

// 7. Convert string to array and vice versa
const str = "a,b,c";
/*
.split() turns a string into an array using a separator.
.join() combines array elements into a string with a separator.
*/