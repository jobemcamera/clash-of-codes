/*
INPUT:
A single line of text consisting of at least one word.

OUTPUT:
On a single line, output the number of vowels in each word of the provided sentence. Numbers are separated by a single space.

CONSTRAINTS:
1 ≤ Length of the sentence < 1024

List of vowels your program needs to consider:
A, E, I, O, U, a, e, i, o, u

EXAMPLE:
Input
CodinGame rocks
Output
4 1
*/

const sentence = readline();

let contador = [];
let palavras = sentence.split(" ");
const regex = (/a|e|i|o|u/ig)

palavras.forEach(vogal => {
  if (vogal.match(regex)) {
    contador.push(vogal.match(/a|e|i|o|u/ig).length);
  } else {
    contador.push(0);
  }
})
console.log(contador);
