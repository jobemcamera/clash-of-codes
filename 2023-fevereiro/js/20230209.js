/*
Given an three integers a, b ,c.
Choose two integers and multiply it.
What is the possible maximum product?
Input
Three integers a, b, c.
Output
Possible maximum product
Constraints
-100≤a,b,c≤100

Input
3 6 5

Output
30
*/

var inputs = readline().split(' ');
const a = parseInt(inputs[0]);
const b = parseInt(inputs[1]);
const c = parseInt(inputs[2]);

if (a * b >= b * c && a * b >= a * c) {
    console.log(a*b);
} else if ( b * c >= a * c ) {
    console.log(b*c)
} else {
    console.log(a*c)
}
