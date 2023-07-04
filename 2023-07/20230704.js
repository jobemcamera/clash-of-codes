/*
You must print every number up to n, n times
Examples:
1 -> 1

3 -> 123123123

5 -> 1234512345123451234512345
Input
The number
Output
Every number up to n, n times
Constraints
0<n<=20
Example
Input
1
Output
1
*/

const n = parseInt(readline());
let sequence = '';
for (let i = 1; i <= n; i++) {
    sequence += i;
}
console.log(sequence.repeat(n));