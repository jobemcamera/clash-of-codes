/*
Find the number of different ways of ordering a list of n elements.

Input
    Line 1: An integer n for the number of elements to be ordered.
Output
    Line 1: An integer corresponding to the number of different ways the list can be ordered.

Constraints
1<=n<=20

Example
Input
    4
Output
    24
*/

const n = parseInt(readline());
let m = 1;
for (let i=n; i>=1; i--) {
    m = m*i;
}
console.log(m)