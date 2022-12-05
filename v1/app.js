//*-*-*-*-*-*-*- Comparison Operators -*-*-*-*-*-*-*

//* Greater Than
console.log(2 > 1); //*True

//* Less Than
console.log(2 < 1); //*False

//* Greater Than or Equal to
console.log(15 >= 15); //*true
console.log(15 >= 16); //*false

//* Less Than or Equal to
console.log(15 <= 15); //*true
console.log(15 <= 16); //*true

//* The == Equality Operator => Checks if two values are equal but not strict check into the type
console.log(1 == 1); //*true
console.log(1 == "1"); //*true
console.log("z" == "z"); //*true
console.log(true == true); //*true
console.log(false == true); //*false
console.log(0 == ""); //*true
console.log(undefined == null); //*true
console.log(false == 0); //*true
console.log(true == 1); //*true

//* The === strict Equality Operator => Checks if two values are equal with strict check into the type
console.log(1 === 1); //*true
console.log(1 === "1"); //*false
console.log("z" === "z"); //*true
console.log(true === true); //*true
console.log(false === true); //*false
console.log(0 === ""); //*false
console.log(undefined === null); //*false
console.log(false === 0); //*false
console.log(true === 1); //*false

//* The != Non-equality Operator => it reverse Checks if two values equal?
console.log(1 != 1); //*false
console.log(1 != "1"); //*false
console.log("z" != "z"); //*false
console.log("z" != "x"); //*true
console.log(true != true); //*false
console.log(false != true); //*true
console.log(0 != ""); //*false
console.log(undefined != null); //*false
console.log(false != 0); //*false
console.log(true != 1); //*false

//* The !== strict Non-equality operator => it reverse Checks if two values equal
console.log(1 !== 1); //*false
console.log(1 !== "1"); //*true
console.log("z" !== "z"); //*false
console.log(true !== true); //*false
console.log(false !== true); //*true
console.log(0 !== ""); //*true
console.log(undefined !== null); //*true
console.log(false !== 0); //*true
console.log(true !== 1); //*true
