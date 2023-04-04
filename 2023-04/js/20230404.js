/*
You will be provided with a decimal number n.
Your target is to return the the binary form of the sum of last digits of octal and hexadecimal equivalents of n.

Input
Line 1: A positive integer n

Output
Line 1: The required sum as described in the statement.

Constraints
Example
Input
5

Output
1010
*/

let n = parseInt(readline());
let pilhaResto = [];
let binario = '';
let resto = 0;

while (n > 0) {
    resto = Math.floor(n % 2);
    pilhaResto.push(resto);
    n = Math.floor(n / 2);
}

while (pilhaResto.length > 0) {
    binario += pilhaResto.pop().toString()
}

console.log(binario);