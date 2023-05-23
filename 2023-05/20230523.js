/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
string
Expected output
6 gnirts

02 Test 2
Input
variable
Expected output
8 elbairav

03 Test 3
Input
pointer
Expected output
7 retniop

04 Test 4
Input
function
Expected output
8 noitcnuf
*/

const input = readline().split('');
console.log(`${input.length} ${(input.reverse().join(''))}`);