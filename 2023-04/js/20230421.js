/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
1
Expected output
1

02 Test 2
Input
4
Expected output
61

03 Test 3
Input
100
Expected output
1

04 Test 4
Input
15
Expected output
522

05 Test 5
Input
123
Expected output
92151

06 Test 6
Input
-9
Expected output
18
*/

// const n = parseInt(readline());
const n = 15;
const inverso = String(n*n).split('').reverse().join('');
console.log(Number(inverso));
