/*
You and your friend Steven go to the gym for a while.
Now to become more efficient you decided to track your progress in your own app.

Different exercises combine weights differently to get the total weight you really move in an exercise.

Exercise types include:
Bench press bp: added weight + 20
Leg press lp: added weight + 47
Planks p: added weight + body weight

Do not forget to multiply result by the amount of repetitions.
Caution: repetitions on planks p are counted as seconds and so they do not influence the volume of weight. So do not multiply in that case.
Input
Line 1: int B Body weight
Line 2: int R Repetition
Line 3: string E Exercise type
Line 4: int W Added weights
Output
Line 1: A Actual weight in total
Constraints
B ≤ A
W ≤ A
Example
Input
70
100
p
0
Output
70
*/

const B = parseInt(readline());
const R = parseInt(readline());
const E = readline();
const W = parseInt(readline());
let bp = (20 + W) * R
let lp = (47 + W) * R
let p = B

if (E == 'bp') {
    console.log(bp);
} else if (E == 'lp') {
    console.log(lp)
} else { 
    console.log(p)
}
