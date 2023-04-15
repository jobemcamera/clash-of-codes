/*
Print a checklist of the given numbers where every odd number is ticked.

Input
Line 1: The number count of integers to check.
Line 2: count integers n to check, separated by a space.

Output
count lines (one for each value of n):
"[ ] n" if n is even,
"[x] n" if n is odd.

Constraints
0 < count < 100
-100 < n < 100

Example
Input
5
1 2 3 4 5

Output
[x] 1
[ ] 2
[x] 3
[ ] 4
[x] 5
*/

const count = parseInt(readline());
var inputs = readline().split(' ');
for (let i = 0; i < count; i++) {
    const n = parseInt(inputs[i]);
    if (n % 2 != 0) {
        console.log(`[x] ${n}`)
    } else {
        console.log(`[ ] ${n}`)
    }
}
