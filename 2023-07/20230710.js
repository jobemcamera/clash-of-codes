/*
Rick Grimes wants to buy some gifts for his son, Coral. He decides to buy some crystal balls. But he is confused because of the deal offered by the shopkeeper. Help him by writing a program.

He wants B black balls and W white balls.
The cost of each black ball is X units.
The cost of each white ball is Y units.
The cost of converting each black ball into white and vice versa is Z units.

Print the minimum cost to get the required number white and black balls.
Input
Line 1: Five numbers B, W, X, Y, Z
Output
One integer showing the minimum cost to get the required number of white and black of balls.
Constraints
0<=X,Y,Z,B,W<=10000
Example
Input
1 3 4 5 7
Output
19
*/

var inputs = readline().split(' ');
const B = parseInt(inputs[0]);
const W = parseInt(inputs[1]);
const X = parseInt(inputs[2]);
const Y = parseInt(inputs[3]);
const Z = parseInt(inputs[4]);

console.log(Math.min(X, Y + Z) * B + Math.min(Y, X + Z) * W);