/**
 * ! Method! What does it mean? Properties what does it mean?
 * * Method in javascript is like function that should be ended with pairbraces(),
 * * So basically it's like function that already there and only use it by calling that method
 * * PropertiesMethod mean like behave like an object of properties
 */
// new String()
let city = new String("Jakarta");
console.log(city);
/** 
 ** @output
String {'Jakarta'}
0: "J"
1: "a"
2: "k"
3: "a"
4: "r"
5: "t"
6: "a"
length: 7
*!  New String() method Behave like an object of properties
*/

// String Literal
let movie = "Great Walls";
console.log(movie); //Great Walls

// toUpperCase Method => make it Capitalized for every single character/index
console.log(movie.toUpperCase()); //GREAT WALLS

// toLowerCase Method => make itDecapitalized for every single character/index
console.log(movie.toLowerCase()); //great walls

// concatanation is method that adding variable/string and return string value
let firstName = "Muhammad";
let lastName = "Fajri";
//There is 2 options
// 1st option
console.log(firstName + lastName); //MuhammadFajri
console.log(firstName + " " + lastName); //Muhammad Fajri

// 2nd option using a string template literal => use backtick notation
console.log(`${firstName} ${lastName}`); //Muhammad Fajri
// note: using template should be contains only variable and not a string

// Length is propertiesMethod => return number of characters starting from 1
console.log(firstName.length); // 8
console.log(lastName.length); // 5
