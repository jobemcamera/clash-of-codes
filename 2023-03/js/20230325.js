/*
You are given a string s with letters and digits. You need to output on one line the string without digits. And on the second line the sum of all the digits in the string

Note :
Digits will always be positive integers.
If you have 2 digits in a row : you have to sum them
Example :
23a5 -> 2+3+5 = 10
Input
Line 1: A string, s
Output
Line 1: The string without digits
Line 2: The sum of all digits in the string
Constraints
1≤ length of s < 256
Atleast one digit in s

Example
Input
    H3e1llo0 W8or2ld !

Output
    Hello World !
    14
*/

const s = readline();
let palavra = ""
let soma = 0;

for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i]))) {
        palavra += s[i];
    } else {
        soma += parseInt(s[i]);
    }
}

console.log(palavra)
console.log(soma)