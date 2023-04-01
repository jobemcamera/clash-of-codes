/*
Given a line of alphabetic characters, extract all the uppercase characters to print them on the first line. 
Then extract all the lowercase characters to print them on the second.

Input
Line 1: the text T

Output
First line: A (possibly empty) line of uppercase characters: the uppercase characters of T
Second line: A (possibly empty) line of lowercase characters: the lowercase characters of T

Constraints
0 <= length of T <= 99

T only contains alphabetic characters i.e. characters among
A-Za-z

Example
Input
ABCDefghIJKLmnop

Output
ABCDIJKL
efghmnop
*/

const t = readline();
const minusculo = /[a-z]/g;
const maiusculo = /[A-Z]/g;
let primeiraLinha = '';
let segundaLinha = '';

for (let i =0; i < t.length; i++) {
    if (t[i].match(minusculo)) {
        segundaLinha += t[i];
    } else if (t[i].match(maiusculo)) {
        primeiraLinha += t[i];
    }
}

console.log(primeiraLinha);
console.log(segundaLinha);