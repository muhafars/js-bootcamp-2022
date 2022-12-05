// ! Switch Statement use for conditions that are known the value of condition unlike ifelse that use for conditions unpredictable/unknown
// switch statement => checking for a single condition
// let score = 10;
// switch (score) {
//   case 10:
//     console.log("Grade A");
// }

// default statement => checking for two conditions
// let score = 10;
// switch (score) {
//   case 10:
//     console.log("Grade A");
//     break;
//   default:
//     console.log("Grade B");
// }

// switch default statement => checking for more than two conditions
let score = 9;
switch (score) {
  case 10:
    console.log("Grade A");
    break;
  case 9:
    console.log("Grade B");
    break;
  case 8:
    console.log("Grade C");
    break;
  case 7:
    console.log("Grade D");
    break;
  default:
    console.log("Grade F");
}

//this one for something unpredictable
let value = "b";

switch (value) {
  case 1 | "a":
    console.log("Value A");
    break;
  case 2 | "b":
    console.log("Value B");
    break;
  // case 3:
  //   console.log("Value C");
  //   break;
  default:
    console.log("Value E");
}
