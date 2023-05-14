/*
You must compute the area of trapezoid
Input
In first line you have a means short base of the trapezoid.
In second line you have b means long base of the trapezoid.
In third line you have h means height.

Output
One decimal number, the area of this trapezoid

Constraints
0<a,b,c

Example
Input
1
2
3

Output
4.5
*/

const a = parseInt(readline());
const b = parseInt(readline());
const h = parseInt(readline());

console.log(parseFloat(((a + b) / 2) * h).toFixed(1));