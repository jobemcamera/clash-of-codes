/*
Create a Fibonacci sequence in reverse

The first two terms of the Fibonacci sequence are 1 and 1. The rest of the terms are calculated by adding the two last terms of the sequence. Ex: the 3rd term is 2 because it's 1 + 1 and the 4th is 3 because it's 2 + 1

Input
Integer N the depth of the Fibonacci sequence to calculate

Output
String s which is the reversal of the Fibonacci sequence calculated and all the terms are space-separated

Constraints
2 ≤ N ≤ 100

Example
Input
4

Output
3 2 1 1
*/

const start = parseInt(readline());
let fibbo = [1, 1]; 

for (let i = 2; i < start; i++) {
    fibbo.push(fibbo[i - 1] + fibbo[i - 2]);
}
console.log(fibbo.reverse().join(' '));