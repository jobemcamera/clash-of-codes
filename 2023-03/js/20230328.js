/*
Some strings are just too complicated, they would be much simpler if they didn't have so many different characters.

Remove all characters from the given string, except for letters and spaces.
Input
A single line of text.
Output
A single line of text containing alpha characters and spaces.

Constraints
Text will be printable ASCII.

Example
Input
Hello, World!
Output
Hello World
*/

const s = readline();
const padrao = /[a-zA-Z\s]/g;
let m = '';

for(let i = 0; i<s.length; i++) {
    if(s[i].match(padrao)) {
        m += s[i];
    }
}

console.log(m);