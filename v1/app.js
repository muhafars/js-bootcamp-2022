// ------------------------JS Data Types--------------------
// *-*-*-*-*-*-*- (1) Primitive Types => the actual value is stored
// *-*-*-*-*-*-*- (2) Reference Types => a reference is stored to where that type is in the memory

// ---------------------------------------------------------
// *-*-*-*-*-*-*- (1) Primitive Types

/*
1- Number
2- String
3- Boolean
4- Undefined
5- Null
6- Symbol
7- BigInt
*/

// 1
/**
 * ! Number mean variable that numbers for math
 */
let numbers = 1;
console.log(numbers + numbers); // 2

// 2
/**
 * ! String mean variable that equal to char, letter
 */
let strings = "1";
console.log(numbers.toString() + strings); // 11
strings = "Fajri";
console.log(strings); // Fajri

// 3
/**
 * ! booleans mean variable that contains true or false
 */
let booleans = true;
console.log(booleans);
booleans = false;
console.log(booleans);

// 4
/**
 * ! Undefined mean variable that is not defined/there is no assigned value
 */
let undefineds;
console.log(undefineds); //undefined
undefineds = "Now Defined";
console.log(undefineds); //Now defined (as strings variable)

// 5
/**
 * ! Null mean variable resembles a zero value
 */

let nulls = null;
console.log(nulls);
nulls = "Now not Null";
console.log(nulls);

// 6
/**
 * !Symbol is a primitive data type of JS along with string,number,bool,null and undefined which are used to identify object properties since none is equal to the other.
 * * symbol is function variable
 */
// get symbol by name
let sym = Symbol.for("Assalamualaikum");
let sym1 = Symbol.for("Warahmatullah");
// get name by symbol
console.log(Symbol.keyFor(sym)); // Assalamualaikum
console.log(Symbol.keyFor(sym1)); // Warahmatullah

// get type by symbol
console.log(Symbol() === Symbol());
console.log(Symbol() == Symbol());

// 7
/**
 * ! BigInt mean variable function
 */
const theBiggestInt = 9007199254740991n;
const alsoHuge = BigInt(9007199254740991); // 9007199254740991n
const hugeString = BigInt("9007199254740991"); // 9007199254740991n
const hugeHex = BigInt("0x1fffffffffffff"); // 9007199254740991n
const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111"
); // 9007199254740991n

const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
const result2 = value2 + 1;
console.log(result2);
