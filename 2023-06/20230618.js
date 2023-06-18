/*
With the given mathematical formulas, you need to ouput the result as an integer. But there's a trick : you need to compute the ASCII value of numbers instead of their visual values.

About division, the result need to be rounded up to the next integer.

Input
Line 1 : A string formula (always two numbers N and M, and one sign)

Output
formula's result as an integer

Constraints
0 ≤ N ≤ 9
0 ≤ M ≤ 9

Example
Input
3 + 6

Output
105
*/

const formula = readline();
let num1 = formula.charCodeAt(0);
let operator = formula.split(' ')[1];
let num2 = formula.charCodeAt(4);


if (operator == '+') {
    console.log(num1 + num2);
} else if (operator == '-') {
    console.log(num1 - num2);
} else if (operator == '*') {
    console.log(num1 * num2);
} else if (operator == '/') {
    console.log(Math.ceil(num1 / num2));
}
