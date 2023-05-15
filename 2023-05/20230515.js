/*
You must sum the maximum and minimum of a sequence
Input
Line 1: Number of integers N
Line 2: A sequence of integers X with length N
Output
Line 1: The Sum of the Min and the Max of the sequence.
Constraints
2 ≤ N ≤ 1000
Example
Input
2
1 1
Output
2
*/


const n = parseInt(readline());
var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
    const x = parseInt(inputs[i]);
}

console.log(Math.max(...inputs) + Math.min(...inputs))