// 1. Create a function greetUser that prints "Welcome to JavaScript".

function greetUser () {
    console.log("Welcome to JavaScript");
}
greetUser();

// 2. Write a function add that takes two numbers and returns their sum.

function num (a, b) {
    sum = a + b
    console.log(sum);   
}
num(42, 1);

// 3. Create a function sayHello that takes a name and prints "Hello <name>".

function sayHello (name) {
    console.log("Hello" + " " + name);
}
sayHello("Shivam");

// 4. Write a function that multiplies three numbers and returns the result.

function cal (a, b, c) {
    let mul = a * b * c
    console.log(mul)
}
cal(2, 3, 5);
  
// Or

function multipliesThree (a, b, c) {
    return a * b * c;
}
let result = multipliesThree(5, 6, 2);
console.log(result);

// 5. Create a function isEven that returns true if a number is even.

function isEven (num) {
    return num % 2 === 0;
}
console.log(isEven(6));

//  Create a function isOdd(num) that returns true if a number is odd.

function isOdd (num) {
    return num % 2 === 1;
}
console.log(isOdd(8));

//  Write a function isPositive(num) that returns true if the number is greater than 0.

function isPositive (num) {
    return num > 0;
}
console.log(isPositive(5));
console.log(isPositive(-5));

//  Create a function isDivisibleBy3(num) that returns true if the number is divisible by 3.

function isDivisibleBy3(num) {
    return num % 3 === 0;
}
console.log(isDivisibleBy3(4));
console.log(isDivisibleBy3(9));

// 6. Write a function areaOfCircle that takes radius and returns area.

// Math.PI	      π = 3.14159 (Circle math constant)

function areaOfCircle(radius) {
    return Math.PI * radius * radius
}
console.log(areaOfCircle(1));

    //  Or 

function areaOfCircle1(radius) {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircle1(3));

// 7. Create a function convertToFahrenheit(celsius) using formula F = C * 1.8 + 32.

function convertToFahrenheit(celsius) {
    let F = (celsius * 1.8)+ 32;
    return F;
}
console.log(convertToFahrenheit(0));

// 8. Write a function to check if a number is divisible by 5 or not.

function isDivisibleby5(num) {
    let number = num % 5 === 0;
    return number;
}
console.log(isDivisibleby5(59));

// 9. Write a function square(num) that returns square of a number.

function square(num) {
    let result = num * num;
    return result;
}
console.log(square(8));

// 10. Create a function greetMorning with a default parameter name = "Guest".

function greetMorning(name = "Guest") {
    let greet = `Good Morning, ${name}!`
    return greet;
}
console.log(greetMorning("Shivam"));
console.log(greetMorning());

// 11. Make a function printNameAge(name, age) to print "Name: X, Age: Y".

function printNameAge(name, age) {
    console.log(`Name: ${name} age: ${age}`);
}
printNameAge("Shivam", 21);

// 12. Write a function to return the max of two numbers (use if-else).

function maxNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(maxNumber(45, 44));
console.log(maxNumber(12, 54));

// 13. Write a function that returns the cube of a number.
 
function cubeNumber(num) {
    let number = num * num * num;
    return number;
}
console.log(cubeNumber(4));

// 14. Create a function doubleArray that takes array and returns new array with all elements * 2.

function doubleArray(arr) {
    return arr.map(function(element) {
      return element * 2;
    });
  }  
console.log(doubleArray([4, 5, 8, 6]));

// Create a function tripleArray that takes an array and returns a new array with each element multiplied by 3.

function tripleArray(arr) {
    return arr.map(function(element) {
        return element * 3;
    });
}
console.log(tripleArray([4, 5, 8, 6]));

// 15. Write a function that converts minutes to seconds.

function convertToSecond(min) {
    let minute = min * 60;
    return minute;
}
console.log(convertToSecond(5));

// 16. Create an arrow function that adds 100 to a number.

const addhundred = (num) => {
    let number = num + 100;
    return number;
}
console.log(addhundred(55));

// 17. Write a function expression to calculate the square root of a number.

function squareRoot(num) {
    let number = Math.sqrt(num);
    return number;
}
console.log(squareRoot(90));

// 18. What will be the output:

function test() {
  let a = 5;
}
// console.log(a);

// Answer a is not defined

// 19. Make a function that takes a name and another function, and calls the second function with that name.

function firstName(name){
    let first = name + 2;
    return first;
    function secondName(nam){
        let second = nam + 3;
        return second;
    };
    console.log(firstName(5));
};
console.log(secondName(7));
