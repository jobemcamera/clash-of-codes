/*
The program:
Your program must output all the odd numbers from 1 to N where N is given as input.
If N is an odd number, it must be included in the output.

INPUT:
1 integer N.

OUTPUT:
All odd numbers from 1 to N

CONSTRAINTS:
0 < N < 1000

EXAMPLE:
Input
9

Output
1
3
5
7
9
*/
 

const N = parseInt(readline());

for (let i = 0; i <= N; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}