/*
Android Neko is a game developed by Android as an easter egg for Android 7 and 11. In Android 7, you play it like this:

1) Choose the food you want to put in the bowl
2) Wait for a random cat to come
3) Name it (If you want to)

How long would it take to speedrun the game (in seconds) if you collect N cats if it takes:

1) P seconds to place food for 1 cat
2) C + ((i-1)*2)) seconds to collect the ith cat
3) R seconds to name a cat

Input
Line 1: N
Line 2: P
Line 3: C
Line 4: R

Output
Time to collect N cats

Constraints
All the variables are integers

Example
Input
1
10
60
6

Output
76
*/

const N = parseInt(readline());
const P = parseInt(readline());
const C = parseInt(readline());
const R = parseInt(readline());
let time = 0;

for (let i = 1; i <= N; i++) {
    time += P + R + C + ((i-1)*2)
}

console.log(time)
