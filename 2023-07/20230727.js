/*
Given a string S, you should calculate an integer R which is the result of summing all S's digits except the first one, and then multiplying the result with the first digit.
if S is not an integer print INVALID

NOTES:
- Be careful, the first number may be negative (starting with '-') !
- Strings starting with '0' are considered valid, example : '012' => 0

Example:
S(Input)=123
R(Output)=1*(2+3)=5
Input
String S
Output
The result R
if the input is not a number print INVALID
Constraints
-100000<R<100000
Example
Input
123
Output
5
*/

const s = readline().split('');

let firstDigit = s[0] === '-' ? parseInt(s[1]) : parseInt(s[0]);
let startIndex = firstDigit == parseInt(s[1]) ? 2 : 1;
let sum = 0;
for (let i = startIndex; i < s.length; i++) {
    sum += parseInt(s[i]);
}

if (Number.isInteger(sum)) {
    console.log(firstDigit * sum);
} else {
    console.log("INVALID")
}

