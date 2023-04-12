/* Your program must determine in which category belongs a given integer. The possible integers are named intervals that are also given.
The intervals do not overlap.
The integer always belongs to a category.

INPUT:
Line 1: X the integer to categorize.
Line 2: N an integer for the number of categories.
Next N lines: Two integers F and T for the inclusive bounds of the interval, followed by a word category, its name.

OUTPUT:
The name of the category with the interval that contains X.

CONSTRAINTS:
0 < N < 100
-1000 ≤ F ≤ T ≤ 1000
F ≤ X ≤ T

EXAMPLE:
Input
10
3
-1000 -1 negative
0 0 null
1 1000 positive

Output
positive
*/

const X = parseInt(readline());
const N = parseInt(readline());
let cat = ''
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const F = parseInt(inputs[0]);
    const T = parseInt(inputs[1]);
    const category = inputs[2];
    if (F > T) {
        if (X < F && X > T) {
            cat = category;
        }
    } else if (T > F) {
        if (X < T && X > F) {
            cat = category;
        }
    }
}
console.log(cat)
