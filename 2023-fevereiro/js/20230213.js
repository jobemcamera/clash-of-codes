/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
    Input
    1
    Expected output
    1 2 3 4 5 6 7 8 9 10
02 Test 2
    Input
    21
    Expected output
    21 42 63 84 105 126 147 168 189 210
03 Test 3
    Input
    8992
    Expected output
    8992 17984 26976 35968 44960 53952 62944 71936 80928 89920
04 Test 4
    Input
    20001
    Expected output
    20001 40002 60003 80004 100005 120006 140007 160008 180009 200010
*/

const N = parseInt(readline());
let sequencia = [];

for(let i=1; i<11; i++) {
    sequencia.push(i*N)
}

console.log(sequencia.join(' '))