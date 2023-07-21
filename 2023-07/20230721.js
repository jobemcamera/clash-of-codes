/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
asdfa afdas
Expected output
asdfaasdfaasdfaasdfaasdfa

02 Test 2
Input
qwqqwq qwq
Expected output
qwqqwqqwqqwqqwqqwq

03 Test 3
Input
j lkajsdflkjdslkg
Expected output
jjjjjjjjjjjjjjj
04 Test 4

Input
input output
Expected output
inputinputinputinputinputinput

05 Test 5
Input
123oiuO*#@ **U*qq9R
Expected output
123oiuO*#@123oiuO*#@123oiuO*#@123oiuO*#@123oiuO*#@123oiuO*#@123oiuO*#@123oiuO*#@
*/

var inputs = readline().split(' ');
const a = inputs[0];
const b = inputs[1];

console.log(a.repeat(b.length));
