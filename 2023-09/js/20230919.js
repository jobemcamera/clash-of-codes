/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
Expected output
Hello
Hll
02 Test 2
Input
Expected output
This Is a sentence
Ths s  sntnc
03 Test 3
Input
Expected output
abcdefghijklmnopqrstuvwxyz
bcdfghjklmnpqrstvwxyz
04 Test 4
Input
Expected output
aeiouy
y
*/

const s = readline();
console.log(s.replace(/[aeiou]/gi,''));