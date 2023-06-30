/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
1
Expected output
1

02 Test 2
Input
2
Expected output
2
22

03 Test 3
Input
5
Expected output
5
55
555
5555
55555

04 Test 4
Input
6
Expected output
6
66
666
6666
66666
666666
*/

const n = parseInt(readline());

for (let i = 1; i <= n; i ++) {
    console.log(n.toString().repeat(i))
}
