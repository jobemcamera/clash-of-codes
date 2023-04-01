/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
    1
    0
    001
Expected output
    110

02 Test 2
Input
    r
    *
    r*r*r****rr**rr***
Expected output
    *r*r*rrrr**rr**rrr

03 Test 3
Input
    $
    %
    $%%%%$$$%%
Expected output
    %$$$$%%%$$
*/

const a = readline();
const b = readline();
const input = readline();
let resultado = [];

for (let i=0; i<input.length; i++) {
    if (input[i] == a) {
        resultado.push(b);
    } else if (input[i] == b) {
        resultado.push(a);
    }
}

console.log(resultado.join(''));
