/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
11
72 101 108 108 111 32 87 111 114 108 100
Expected output
Hello World
02 Test 2
Input
9
67 48 100 105 110 71 64 109 101
Expected output
C0dinG@me
03 Test 3
Input
42
68 111 110 39 116 32 67 114 117 115 104 32 84 104 97 116 32 68 119 97 114 102 44 32 72 97 110 100 32 77 101 32 116 104 101 32 80 108 105 101 114 115
Expected output
Don't Crush That Dwarf, Hand Me the Pliers
04 Test 4
Input
1
32
Expected output

*/

const charCount = parseInt(readline());
var inputs = readline().split(' ');
let char = ''
for (let i = 0; i < charCount; i++) {
    const charCode = parseInt(inputs[i]);
    char += String.fromCharCode(charCode)
}
console.log(char);