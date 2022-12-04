// ------------------------JS Data Types--------------------
// *-*-*-*-*-*-*- (1) Primitive Types
// *-*-*-*-*-*-*- (2) Reference Types

// ---------------------------------------------------------
// *-*-*-*-*-*-*- (1) Primitive Types

/*
1- Number
2- String
3- Boolean
4- Undefined
5- Null
6- Symbol
7- bigInt
*/

// ---------------------------------------------------------
// *-*-*-*-*-*-*- (2) Reference Types

/*
Arrays
Objects
Functions
*/

// Array
/**
 * ! Array in javascript used to stored multi-dimensional variable with same purpose
 * * use brackets []
 * * [1, 2, ...];
 * * [index0, index1, ...];
 * * @index use for accesing value and represent decimals number starting from 0
 * @array work like matrix ordo in math used ordo column
 */
let numbers = [1, 2, 3];
console.log(numbers); // (3) [1, 2, 3] => row1
let arrayMatrix2Ordo = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(arrayMatrix2Ordo);
/**
 * !Output
 ** 0 : (3) [1, 2, 3] //row 1 contains 1,2,3
 ** 1 : (3) [4, 5, 6] //row 2 contains 4,5,6
 */

// Object
/**
 *! Object in javascript used to stored multiple data with same class,purpose
 * * use brackets {}
 * * consist key-value pairs => this call properties => {key: value, key: value}
 * * use @properties instead @index unlike array
 * @object works like to stored multiple data
 */
const person = {
  name: "Fajri", // key-value pair => properties
  age: 25,
};
console.log(person); //{name: 'Fajri', age: 25}
// now access more specific properties
console.log(person.age); // 25
console.log(person.name); // Fajri

// Function
/**
 * ! Function in javascript used to create components app used by specify features, for add, sum, update, delete etc
 * * used for logic purpose
 */

//conventional declare function
function add(x, y) {
  return console.log(x + y);
} //declare function
add(); // output nan //call the function
//now add parameters
add(2, 4); // 6
add("Fajri", 25); // Fajri25
add("Fajri", "Assidiq"); //FajriAssidiq
// use properties object person with key=name
add(person.name, "Assidiq"); //FajriAssidiq
// use variable to stored lastName variable data
let lastName = "Assidiq";
add(person.name, lastName); //FajriAssidiq

//modern way declare function
const sum = (x, y) => {
  return console.log(x + y);
};
sum(1, 2); // 3
sum(1, 2, 3); // 3 // same 3 the output cause there is only 2 parameters
