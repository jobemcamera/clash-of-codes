/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
Expected output
helloworld
hello
world
02 Test 2
Input
Expected output
helloworldhello
hello
world
03 Test 3
Input
Expected output
itsdadarkrk
dark
its
04 Test 4
Input
Expected output
eatingeeatat
eat
ing
05 Test 5
Input
Expected output
aa
aaa
aa
*/

const s = readline();
const t = readline();
if (s.includes(t)) {
    let d = s.replaceAll(t, '')
    if (d.includes(t)) {
        console.log(d.replaceAll(t, ''))
    } else {
        console.log(d.replaceAll(t, ''))
    }
}
