/*
In chemistry, simple alkanes are made of carbon and hydrogen atoms. According to the IUPAC nomenclature system, they are named by the number of carbons they contain (here are the first 5 alkanes):

- methane CH4 (1 Carbon atom, 4 Hydrogen atoms)
- ethane C2H6 (2 Carbon atoms , 6 Hydrogen atoms)
- propane C3H8 (3 Carbon atoms, 8 Hydrogen atoms)
- butane C4H10 (4 Carbon atoms, 10 Hydrogen atoms)
- pentane C5H12 (5 Carbon atoms, 12 Hydrogen atoms)

Given a diagram of a molecule find its nomenclature (its IUPAC name).
Input
Line 1: An integer N for the number of lines used to draw the diagram of a molecule.
Next N lines: A diagram of a molecule consisting of characters H and C for the element hydrogen and carbon respectively; - and | to represent the bonds.
Output
A single line containing NONE if the given molecule is not an alkane. Otherwise, output the IUPAC name of the given molecule (methane, ethane, ...).
Constraints
0 ≤ N ≤ 15
Example
Input
5
  H
  |
H-C-H
  |
  H
Output
methane

*/

const N = parseInt(readline());
let carbons = 0;
let hydrogens = 0;
for (let i = 0; i < N; i++) {
    const line = readline();
    for (let j = 0; j < line.length; j++) {
        if (line[j] === 'C') {
            carbons += 1;
        } else if (line[j] === 'H') {
            hydrogens += 1;
        }
    }
}

if (carbons == 1 && hydrogens == 1) {
    console.log('NONE');
} else if (carbons == 1) {
    console.log('methane');
} else if (carbons == 2) {
    console.log('ethane');
} else if (carbons == 3) {
    console.log('propane');
} else if (carbons == 4) {
    console.log('butane');
} else if (carbons == 5) {
    console.log('pentane');
} else {
    console.log('NONE');
}
