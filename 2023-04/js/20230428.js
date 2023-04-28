/*
For each of the N pairs of integers, write whether the Sum Of Squares is greater than, lower than, or equal to the Square Of the Sum.
Input
Line 1: The number N of pairs of integers.
N following lines: Two integers a and b (separated by a blank space).
Output
For each of the N pairs of integers a and b, display on a line >, < or = depending on whether a²+b² is respectively greater than, lower than, or equal'to (a+b)².
Constraints
0 < N < 100
-1e9 < a,b < 1e9
Example
Input
1
2 3
Output
<
*/

const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const a = parseInt(inputs[0]);
    const b = parseInt(inputs[1]);
    if (a * a + b * b > (a + b) ** 2) {
        console.log('>')
    } else if ((a * a + b * b < (a + b) ** 2)) {
        console.log('<')
    } else {
        console.log('=')
    }
}
