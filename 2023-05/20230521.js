/*
You have just played a few games of the latest shooter and wanted to calculate your average Kill/Death ratio for the games that you played. Output the average K/D ratio for all the games played, and whether it was Positive (>=1.00) or Negative.

K/D ratio per game is calculated by taking Kills and dividing by your Deaths. An example is having 22 kills to 2 deaths, your ratio for the game is 11. Having 9 kills to 0 deaths yields a ratio of 9. If these are your two games played, your average KD ratio would be 10. [(11 + 9) / 2 = 10]

Input
Line 1: An integer G for the number of games played.
Next G lines: Two space separated integers K and D for the kills and deaths for the game.

Output
The average ratio for all the games played followed by whether you went Positive or Negative. (1.00 and above is a positive ratio)
Answer is separated by space
Round answer to 2 decimal places

Constraints
1 ≤ G ≤ 10
0 ≤ K,D < 100

Example
Input
2
25 2
2 20

Output
6.30 Positive
*/

const G = parseInt(readline());
let KD = [];
for (let i = 0; i < G; i++) {
    var inputs = readline().split(' ');
    const K = parseInt(inputs[0]);
    const D = parseInt(inputs[1]);
    if (D != 0) KD.push(K/D);
    else KD.push(K);
}

const result = KD.reduce((kd, curr) => {
    kd += curr / KD.length; 

    return kd;
}, 0)

if (result >= 1) console.log(`${result.toFixed(2)} Positive`);
else if (result < 0) console.log(`${result.toFixed(2)} Negative`);
else console.log(`${result.toFixed(2)} Negative`);