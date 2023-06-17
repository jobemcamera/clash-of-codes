/*
Given the year, print the number of days in February in the year. In addition, print the type of year. The type of year is determined using the following rule:

*If the year value is divisible by 400, its type is L.
*If the year value isn't divisible by 400 but is divisible by 100, its type is H.
*If the year value isn't divisible by 100 but is divisible by 4, its type is F.
*If the year value isn't divisible by 4, its type is N.
Input
Line 1: One line that has one integer, year.
Output
Line 1: The number of days in February in year and the type of the year as described in the in Statement. Separate the two values by space.
Constraints
0 < year < 10000
Example
Input
3003
Output
28 N
*/

const year = parseInt(readline());

if (year % 400 == 0) {
    console.log('29 L')
} else if (year % 400 != 0 && year % 100 == 0) {
    console.log('28 H')
} else if (year % 100 != 0 && year % 4 == 0) {
    console.log('29 F')
} else if (year % 4 != 0) {
    console.log('28 N')
} else {
    console.log('28 N')
}
