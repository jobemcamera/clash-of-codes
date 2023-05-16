/*
You borrowed N dollars from the bank. The compound interest accrues I % each month. You will pay the interest in M months. 
Then how many $s you have to pay to the bank after M months?
The result will be always an integer.

Input
Line 1: Integers N,I,M

Output
Line 1: The amount of the money you have to pay to the bank

Constraints
0 ≤ N ≤ 10000
0 ≤ I ≤ 100
0 ≤ M ≤ 12
0 ≤ the result ≤ 10000

Example
Input
200 50 2

Output
450
*/

var inputs = readline().split(' ');
const N = parseInt(inputs[0]);
const I = parseInt(inputs[1]);
const M = parseInt(inputs[2]);

let J = parseInt(N * (1 + (I/100))**(M))
console.log(J) 