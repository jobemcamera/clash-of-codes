/*
Return the largest of the ASCII codes of the characters contained in the word!
Input
Line 1: the word
Output
Line 1: the largest ascii code
Constraints
1 <= length(word) <= 100
word does not contain space.
Example
Input
a
Output
97
*/

const word = readline().split('');
let largest = [];

word.forEach(char => {
    largest.push(char.charCodeAt(0));
})

console.log(Math.max(...largest));