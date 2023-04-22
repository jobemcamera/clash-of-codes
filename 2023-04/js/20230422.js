/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
2
2
Expected output
4

02 Test 2
Input
8
6
Expected output
50

03 Test 3
Input
14
18
Expected output
256

04 Test 4
Input
20
25
Expected output
505

05 Test 5
Input
-2
2
Expected output
0

06 Test 6
Input
8
-6
Expected output
-34

07 Test 7
Input
20
-25
Expected output
-455
*/

const a = parseInt(readline());
const b = parseInt(readline());

console.log(a*b + Math.abs(b-a))