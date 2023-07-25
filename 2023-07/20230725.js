/*
Your program must output true if the given number n is a tall number or false if n is not a tall number.
A tall number is a number for which every digit is bigger or equal to the digit on its left.
Example: 123 is a tall number because:
3 >= 2
2 >= 1

Note: The left-most digit can always be considered to be a 0.
Input
Line 1: An integer n . May have leading zeros.
Output
A single line containing true or false
Constraints
0 < n < 10000000
n can have up to 11 digits, including trailing zeros.
Example
Input
123
Output
true
*/

const n = readline().split('');

const sorted = [...n].sort((a, b) => parseInt(a) - parseInt(b));

if (sorted.join('') === n.join('')) {
  console.log('true');
} else {
  console.log('false');
}