/*
The citizens of Byteland regularly play a game. They have blocks each denoting some integer from 0 to 9. These are arranged together in a random manner without seeing to form different numbers keeping in mind that the first block is never a 0. Once they form a number they read in the reverse order to check if the number and its reverse is the same. If both are same then the player wins. We call such numbers palindrome.

Ash happens to see this game and wants to simulate the same in the computer. As the first step he wants to take an input from the user and check if the number is a palindrome and declare if the user wins or not.
Input
N is an Integer.
Output
For each input output "wins" if the number is a palindrome and "loses" .
Constraints
1<=N<=20000
Example
Input
131
Output
wins
*/

const a = readline().split('');
const b = [...a].reverse()
if (a.join('') === b.join('')) {
    console.log('wins')
} else {
    console.log('loses')
}