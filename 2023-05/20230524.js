/*
To find the rainfall for a week
On Rainy days R, 4mm of rain falls
No rain falls on Sunny days S

Input
Line 1 a string containing 7 characters representing Weather forecast

Output
Write total rainfall

Integer
Constraints

String contains 7 Capital letters R or S

Example
Input
RRRRRRR

Output
28
*/

const days = readline();
let rainfall = 0;

for (let i = 0; i < days.length; i++) {
    if ( days[i] == 'R') {
        rainfall += 1;
    }
}

console.log(rainfall)