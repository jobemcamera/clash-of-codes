/*
Write a function that takes an array of numbers and returns the sum of the even numbers in the array.

Input
Line 1: An integer n - count of elements in array.
Line 2: n space-separated integer numbers x_1 .. x_n.

Output
sum of even numbers

Constraints
-100 <= x_i <= 100

Example
Input
4
1 2 3 4

Output
6
*/

const n = parseInt(readline());
var inputs = readline().split(' ');
let sum = 0;
for (let i = 0; i < n; i++) {
    const x = parseInt(inputs[i]);
    if (x % 2 == 0) sum += x
}
console.log(sum);