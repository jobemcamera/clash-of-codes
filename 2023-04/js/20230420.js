/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
2 ? 9 = 11
Expected output
+

02 Test 2
Input
22 ? 2 = 11
Expected output
/

03 Test 3
Input

78 ? 42 = 3276
Expected output
*

04 Test 4
Input
47 ? 28 = 19
Expected output
-
*/


const problem = readline();
let num1 = '';
let num2 = '';
let result = '';
let operator = '';

for ( let i = 0; i < problem.indexOf('?'); i++) {
    num1 += problem[i];
}

for ( let i = problem.indexOf('?') + 1; i < problem.indexOf('='); i++) {
    num2 += problem[i];
}

for ( let i = problem.indexOf('=') + 1; i <= problem.length -1; i++) {
    result += problem[i];
}

if (parseInt(num1.trim()) + parseInt(num2.trim()) == parseInt(result.trim())) {
    console.log("+")
} else if (parseInt(num1.trim()) - parseInt(num2.trim()) == parseInt(result.trim())) {
    console.log("-")
} else if (parseInt(num1.trim()) * parseInt(num2.trim()) == parseInt(result.trim())) {
    console.log("*")
} else if (parseInt(num1.trim()) / parseInt(num2.trim()) == parseInt(result.trim())) {
    console.log("/")
} 
