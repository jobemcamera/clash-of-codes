/*
You must ouput the sum of the first N even natural numbers.
For example, if N=4 we get 2, 4, 6, 8 and the sum of these numbers is 20.

Input
Line 1: An integer N for the number of even natural numbers to sum.

Output
Line 1 : The sum.

Constraints
0 ≤ N ≤ 10^9

Example
Input
4

Output
20
*/

const n = parseInt(readline());
const sum = n * (n + 1);
console.log(sum);