/*
A DNA strand is composed of a series of nucleobases commonly referred to as A, C, T and G.
Every strand has a complementary strand which presents the complementary nucleobase for each one found on the first strand.

Reminder :
A is complementary to T.
C is complementary to G.

Your program must read a DNA sequence from the standard input and print the complementary sequence to the standard output.

INPUT:
DNA a string containing characters from A, C, G and T.

OUTPUT:
A single line containing the complementary DNA sequence to DNA (A<=>T and C<=>G).

CONSTRAINTS:
DNA contains at least 1 character.
DNA contains less than 1024 characters.

EXAMPLE:
Input
ACGT
Output
TGCA
*/

const DNA = readline();
let complemento = [];
const sequencia = [...DNA]

sequencia.forEach( nucleobase => {
    if (nucleobase == 'A') {
        complemento.push('T')
    } else if (nucleobase == 'C') {
        complemento.push('G')
    } else if (nucleobase == 'T') {
        complemento.push('A')
    } else if (nucleobase == 'G') {
        complemento.push('C')
    }
})

console.log(complemento.join(''));