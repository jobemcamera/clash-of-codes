/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
Expected output
1
1
02 Test 2
Input
Expected output
13
1 3 5 7 9 11 13
03 Test 3
Input
Expected output
6
1 3 5
04 Test 4
Input
Expected output
-5
0
05 Test 5
Input
Expected output
0
0
*/

const m = parseInt(readline());
let result = [];
if (m > 0) {
    for(let i = 1; i <= m; i+=2) {
        result.push(i)
    }
} else {
    result.push(0)
}
console.log(result.join(' '));