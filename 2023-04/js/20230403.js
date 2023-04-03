/*
You have one integer N and you need to return the product and the sum of consecutive integers from 1 to N inclusive

Input
an integer N

Output
Line 1 : product of consecutive integers
Line 2 : sum of consecutive integers

Constraints
1 ≤ N ≤ 15

Example
Input
2

Output
2
3
*/

const N = parseInt(readline());
let produto = 1;
let soma = 0;

for (let i = 1; i <= N; i++) {
    produto *= i;
    soma += i;
}

console.log(produto)
console.log(soma)