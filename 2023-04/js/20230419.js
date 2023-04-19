/*
Progress bar...

Input
A = []
B = <>
L = 10
PROG = 0.5

Output
[][][][][]<><><><><>

Input
A = Y
B = O
L = 20
PROG = 0.75

Output
YYYYYYYYYYYYYYYOOOOO
*/

const A = readline();
const B = readline();
const L = parseInt(readline());
const PROG = parseFloat(readline());

const completed = Math.ceil(PROG * L); 
let progress = [];

for (let i = 0; i < completed; i++) {
    progress.push(A)
}

for (let j = completed; j < L; j++) {
    progress.push(B)
}

console.log(progress.join(''))