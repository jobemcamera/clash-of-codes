/*
You need to print the sum of factorial of a number and the sum of all natural numbers ranging from 1 to the number (both inclusive).
For example if input is equal to 4, then output should be (4*3*2*1)+4+3+2+1

Input
Line 1: A Positive integer n
Output
Sum of factorial as well as all integers below the number including number
Constraints
1 ≤ n ≤ 25

Example:
    Input
    4
    Output
    34
*/


const n = parseInt(readline());
let fatorial = 1;
let soma = 0;
let resultado = 0;

if (n >=1 && n <= 25) {
    for (let i = n; i>=1; i--) {
        fatorial *= i;
        soma += i;
        resultado = fatorial + soma;
    }
}

console.log(resultado);
