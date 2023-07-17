/*
An odious number is defined as a number with an odd amount of 1s in its binary expansion. 4 is an example of this as it is "100" in binary and thus is an odious number.

Output true or false depending on if the input, x, is odious or not.
Input
x is a nonnegative integer
Output
true or false
Constraints
0≤x
Example
Input
4
Output
true
*/

let x = parseInt(readline());
let binary = [];

while (x > 0) {
    binary.push(x % 2);
    x = Math.floor(x / 2);
}

let odious = binary.reduce((acc, curr) => {
    if (curr === 1) {
        acc++;
    }
    return acc;
}, 0)

console.log(odious % 2 == 0 ? 'false' : 'true');
