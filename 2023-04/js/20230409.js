/*
in a world where people get powers by eating magical fruits you will be given n fruits types.
there are 3 types of fruits:
logia
paramecia
zoan

a logia fruit is valued for 100 beli
a paramecia is valued for 75 beli
a zoan is only valued for 25 beli

output the sum of all the fruits value in beli
Input
line 1 : n the number of fruits
n lines : A string fruits in each line for the name of a fruit

Output
the sum of all the fruits value in beli

Constraints
Example
Input
3
logia
zoan
paramecia

Output
200 beli
*/

const n = parseInt(readline());
let sum = 0;
for (let i = 0; i < n; i++) {
    const fruits = readline();
    if (fruits == "logia") {
        sum += 100;
    } else if (fruits == "paramecia") {
        sum += 75;
    } else if (fruits == "zoan") {
        sum += 25;
    }
}
console.log(`${sum} beli`)