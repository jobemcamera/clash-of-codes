/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
Expected output
a----b
A----B
02 Test 2
Input
Expected output
Hello!!
hELLO!!
03 Test 3
Input
Expected output
AAbBcc
aaBbCC
04 Test 4
Input
Expected output
TesT
tESt
*/

const str = readline().split('');
let result = [];
str.forEach((letter) => {
    if (letter.toUpperCase() == letter) {
        result.push(letter.toLowerCase());
    } else if (letter.toLowerCase() == letter) {
        result.push(letter.toUpperCase());
    }
})

console.log(result.join(''));