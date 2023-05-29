/*
When you go out to dinner with your friends, everyone toasts with everyone else once. You wonder how often one glass bumps into another.

Input
An integer n indicating the number of guests

Output
An integer that indicates the number of times the glasses have been knocked together

Constraints
0 ≤ n ≤ 1000

Example
Input
2

Output
1
*/

const n = parseInt(readline());
console.log((n-1)*(n/2));