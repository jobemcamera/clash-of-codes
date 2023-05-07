/*
Your task is to find the sum of the first N odd natural numbers.
Input
Line 1: an integer N number of odds to sum up
Output
Line 1: sum of the first N odds
Constraints
0 < N < 1000
Example
Input
1
Output
1
*/

const n = parseInt(readline());
let sum = 0;

for (let i = 1; i <= n; i++ ) {
    sum += 2 * i - 1;
}

console.log(sum);
