/*
Input
A The string
Output
Line 1 Length of A+4 stars
Line 2 A star followed by a space, then the string, another space and a final star.
Line 3 Length of A+4 stars
Constraints
Length of A < 64
Example
Input
Hello world!
Output
****************
* Hello world! *
****************
*/

const A = readline();

var linha = ''

for( i=0; i<(A.length+4); i++) {
    linha+='*'
}

console.log(linha);
console.log('* ' + A + ' *');
console.log(linha);
