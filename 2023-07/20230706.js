/*
You must output the number of vowels in a string.
Y and y are not vowels!
Input
A single line: A string str.
Output
An integer: The number of vowels in the string.
Constraints
0 < string length <= 100
Example
Input
Hello World!
Output
3
*/


const str = readline();
console.log(str.match(/[aeiou]/gi).length);
