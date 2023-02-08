/* 
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:

INPUT: 2 3 4
OUTPUT: 4 3

INPUT: 3 4 5 8
OUTPUT: 8 5 4

INPUT: 5 10 62 30 58 46
OUTPUT: 62 58 46 30 10
*/

// SOLUÇÃO
const N = parseInt(readline());
let seq = [];
for (let i = 0; i < N; i++) {
    const X = parseInt(readline());
    seq.push(X)
}

let ordenado = seq.sort((a, b) => b - a)
console.log(ordenado.join(' '))
