// Finding the Index
let pet = "Birdy the Bird";
console.log(pet); //Birdy the Bird
//use index of array that start from 0
console.log(pet[2]); //r
console.log(pet[8]); //e
console.log(pet[4]); //y
// length properties behave like object properties and use index of array but start from 1 unlike array thats start from 0
console.log(pet[pet.length - 1]); //d
console.log(pet[pet.length - 2]); //r
console.log(pet[pet.length - 3]); //i

// trim method => make it trim delete an whitespace
let shoes = "    nike      ";
console.log(shoes); //    nike
console.log(shoes.trim()); //nike
shoes = "   nike vs adidas";
console.log(shoes); //     nike vs adidas
console.log(shoes.trim()); //nike vs adidas

// indexOf method => use to find the index of target start from 0
console.log(pet.indexOf("y")); //4

// charAt method => find the character at index target
console.log(pet.charAt("4")); //y

// slice method =>  cut a value at index target
console.log(pet.slice(4)); //y the Bird
// this one give an range index
console.log(pet.slice(4, 9)); //y the
//combine method
console.log(pet.slice(5, 9).trim()); //the

// split method  => its like take take this index target and print the rest
console.log(pet.split(" ")); //(3) ['Birdy', 'the', 'Bird']
console.log(pet.split("")); //(14) ['B', 'i', 'r', 'd', 'y', ' ', 't', 'h', 'e', ' ', 'B', 'i', 'r', 'd']
console.log(pet.split("the")); //(2) ['Birdy ', ' Bird']

// includes method => method use to check if value assigned is there
console.log(pet.includes("@")); //false
console.log(pet.includes("i")); //true

// replace method => method use to delete target value and change with a new value
console.log(pet.replace("the", "a")); //Birdy a Bird
