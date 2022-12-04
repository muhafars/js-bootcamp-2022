/** 
*! Variable Type and Declarations
*! 1- var
** Var is variable global scope that means can be access even inside function and outside function 
* @reassignments = true => can be change value
*! 2- let
** Let is block scope that means cannot be accessed outside block declaration => if declare in some function will not be able to access outside block function
* @reassignments = true => can be change value
*! 3- const
** const is block scope that means cannot be accessed outside block declaration
* @reassignments = false => cannot be change value

*! Naming variable must be {understandable, make sense, camelCase, use rules}
* @rules @examples
** let foo = ....;, fooUpdate = ....;, fooDelete=....;
*/

// var
var name = "Muhammad";
console.log(name); //Muhammad
name = "Muhammad Fajri";
console.log(name); //Muhammad Fajri

// let
function person() {
  let age = 25;
  console.log(age); //25
}
person(); //call person FN with age variable output: 25
//  if we call the variable age in block personFN
/**
 * ! console.log(age);
 * * output: Uncaught ReferenceError: age is not defined
 */
// need to redeclare variable
let age = 20;
console.log(age); //20
// that is what a meaning of block scope variable

// const
const skills = "Algorithms";
console.log(skills); //Algorithms
skills = 2;
// if we try to change the value of a variable will end up with an error
console.log(skills); //Uncaught TypeError: Assignment to constant variable.
