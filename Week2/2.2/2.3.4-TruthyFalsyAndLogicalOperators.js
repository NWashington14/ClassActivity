// Logical Operators
// what do you expect each line to print?
console.log(true && false); // false
console.log(true || false); //
console.log(!true); // false
console.log(!(true && false)); // true
console.log(false || !false); // false

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null); // null
console.log(!``); // null
console.log(!(1 && "false")); // false
console.log(NaN || !"true"); // undefined

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age = 9;

if (age >= 10)
{
  console.log("Full Menu");
} else
{
  console.log("kids menu");
}

// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;

if (!num) {
  console.log("The number is zero")
} else {
  console.log("I am I doing this right?")
}

// Write your if statement here *
