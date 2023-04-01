/*
The program:
Your program must calculate the sum of even digits in a number N.

As an example, for 120789466, the result is 2+8+4+6+6=26.

INPUT:
An integer number N

OUTPUT:
An integer number, the sum of even digits in N.

CONSTRAINTS:
0 ≤ N < 2^32

EXAMPLE:

Input
120789466

Output
26
*/
const N = readline();
let soma = 0;

for (let i = 0; i < N.length; i++) {
    if (parseInt(N[i]) % 2 == 0) {
        soma = soma + parseInt(N[i])
    }
}

console.log(soma);
