/*
The program:
Your program must print the N first numbers of an arithmetic sequence of common difference R and started by 0.

An arithmetic sequence is a sequence of numbers such that the next term can be computed by adding a constant value R.

INPUT:
Two space separated integers N and R.

OUTPUT:
The first N integers of the arithmetic sequence of common difference R, starting with 0.

CONSTRAINTS:
0 < N < 100
0 ≤ R ≤ 100

EXAMPLE:
Input
5 2
Output
0 2 4 6 8
*/

var inputs = readline().split(' ');
const N = parseInt(inputs[0]);
const R = parseInt(inputs[1]);
let num = 0;
let result = []

for (let i = 0; i < N*2; i += 2) {
    result.push(num);
    num += R
}

console.log(result.join(' ')); 