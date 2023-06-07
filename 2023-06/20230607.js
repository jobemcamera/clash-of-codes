/*
Find the total sum of the sum of the first N positive numbers, the first N positive perfect squares, and the first N positive perfect cubes.

Input
Line 1: An integer N

Output
Line 1:The sum of the sum of all numbers from 1 to N, the sum of 1 to N each squared and the sum of 1 to N each cubed.

Constraints
1 ≤ N ≤ 300 (The solution is always lower than 2^31-1)

Example
Input
3

Output
56
*/
const N = parseInt(readline());

let soma = 0;
let quadrado = 0;
let cubo = 0;

for (let i = 1; i <= N; i++) {
    soma += i;
}
for (let i = 1; i <= N; i++) {
    quadrado += Math.pow(i, 2)
}
for (let j = 1; j <= N; j++) {
    cubo += Math.pow(j, 3)
}
console.log(soma + quadrado + cubo);