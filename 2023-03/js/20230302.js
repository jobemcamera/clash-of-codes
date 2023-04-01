/*
The Pharaoh-king of egypt, Ramesses II, loved cats.
He kept track of the years in which his cats were born and when did they die.

You need to write a code that gets a list of cats (name, year of birth, year of death), and a specific year (integer, starting from 0, the year of Ramesses II rise to power). And you must print the number of living cats.

Clarification:
A cat is cosidered alive and counted as one if the specified year (m) if greater-or-equal to the year of birth AND smaller than the year of death.

Example:
Osiris, 15, 23
Osiris is considered alive during the years [15,16,17,....,20,21,22] but NOT 23.
Input
Line 1: An integer N for the number of cats Ramesses II owned.
Line 2: An integer M The year in which we want to know how many cats were alive.
Next N lines: A string cat_name for the name of the cat and two space separated integers b and d for year of birth and the year of death.
Output
The number of living cats in the given year.
Constraints
2 ≤ N ≤ 10000
0 ≤ M ≤ 10000
0 ≤ b < d < 150
Example
Input
2
8
Princess 6 15
Bandit 7 18
Output
2
*/

const N = parseInt(readline());
const M = parseInt(readline());
let livingCats = 0;
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const catName = inputs[0];
    const b = parseInt(inputs[1]);
    const d = parseInt(inputs[2]);

    if (M >= b && M < d) {
        livingCats++
    }
}

console.log(livingCats)