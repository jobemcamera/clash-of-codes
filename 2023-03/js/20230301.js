/*
You need to compute the sum of all even and odd positive Integers up to n (n included) separately.
Input
    One integer n
Output
    Line 1: sum_odd
    Line 2: sum_even
Constraints
    0<n<2^30
    0<sum_*<2^40
Example
Input
    1
Output
    1
    0
*/

const n = parseInt(readline());
let odd = 0;
let even = 0;

for (let i=1; i<=n; i++) {
    if(i % 2 == 0) {
        even += i
    } else
        odd += i
}

console.log(odd);
console.log(even);
