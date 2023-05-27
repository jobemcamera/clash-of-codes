/*
The program:
Swap each character at an even position with the next character if there is one. Positions start at zero.
INPUT:
A single string s.
 
OUTPUT:
The transformed string.
 
CONSTRAINTS:
s contains less than 8192 characters.
 
EXAMPLE:
Input
ABCDEF

Output
BADCFE
*/

const S = readline();
let transformed = '';

  for (let i = 0; i < S.length - 1; i += 2) {
    transformed += S[i + 1] + S[i];
  }
  if (S.length % 2 !== 0) {
    transformed += S[S.length - 1];
  }

console.log(transformed)
