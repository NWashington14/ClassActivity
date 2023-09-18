const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const lastNums = nums.pop();
const lastNums2 = nums.pop();
console.log(`lastNums: ${lastNums} lastNums2: ${lastNums2}`);
// remove each of the first two items with shift(), saving each item to a variable
const firstNums = nums.shift();
const firstNums2 = nums.shift();
console.log(`firstNums: ${firstNums} and firstNums2: ${firstNums2}`);
// use push and unshift to add the variables back to the array in numerical order, 0-6

