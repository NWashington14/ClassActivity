// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let i = 1;
// 2) create a variable to represent the current total
let currentTotal = 0;
// 3) write a while loop that sums the numbers from 1 to 100
while (i <= 100)
{
  console.log(i);
  currentTotal = currentTotal + i;
  i++
}
console.log(currentTotal);
// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100

// i = 1;

let sum = 0;

for (let i = 1; i <= 100; i++) {
 sum = sum + i;
console.log(i);
}

// for (let i = 1; i <= 100; i++) {
//   total += i;
//   }
//       console.log(total);
