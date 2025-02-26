/*             node 01_basics/05_string.js                 */

const name = "Shivam"
const repoCount = 50

// console.log(name + repoCount + " Value");  // This is old menthod try not use

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shivam-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "        Shivam       "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url ="https://shivam.com/shivam%20singh"

console.log(url.replace('%20', '_'));
console.log(url.includes('shivam'));
console.log(url.includes('rajan'));

console.log(gameName.split('-'));
