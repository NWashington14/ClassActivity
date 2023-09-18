// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function functionWithTwoParams (param1 = 15, param2 = 50) {
  console.log(param1)
  console.log(param2)
  return param1 + param2;
}

// invoke the function and pass in two numbers

functionWithTwoParams(8, 10);

// invoke the function and pass in more than two numbers

functionWithTwoParams(8, 10, 20, 2);

// invoke the function and pass in only one number

functionWithTwoParams(5);

// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

functionWithTwoParams(30);



// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

function functionCheese (param1, param2 = 50, ...restParam) {
  console.log(param1)
  console.log(param2)
  console.log(restParam);
  return param1 + param2;
}

// again, invoke the function and pass in more than two numbers
console.log("Below is the funtion with rest param");
console.log(functionCheese(10, 29, 53, 84));
console.log("-------")
let restCheese = functionCheese(10, 29, 53, 84);
