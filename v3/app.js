// if Statement => checking for a single condition

// Example 1
if ("Ash" === "Ash") {
  console.log("Yay Ash");
} // Yay Ash
// Example 2
if ("Fajri" === "AWS") {
  console.log("NO Way");
} //There is no otput

// Example 3
let time = 0700;
if (time === 0700) {
  console.log("Good Morning");
} //Good Morning

// else statement => checking for two conditions
let score = 8;
if (score === 10) {
  console.log("Grade A");
} else {
  console.log("Grade B");
} //Grade B

// if else statement => checking for more than two conditions
const ModelLogicGrade = (score) => {
  if (score === 10) {
    console.log("Grade A");
  } else if (score === 9) {
    console.log("Grade B");
  } else if (score === 8) {
    console.log("Grade C");
  } else if (score === 7) {
    console.log("Grade D");
  } else {
    console.log("Grade F");
  }
};
ModelLogicGrade(10);
