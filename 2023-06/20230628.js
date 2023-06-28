/*
A robot operates on a 2D plane system, at a given time, the robot is at specific coordinates a,b.
The robot wants to get to a specific destination x,y.
The robot can only move one unit each step in either UP, DOWN, RIGHT, or LEFT directions.
Your job is to calculate the number of moves the robot needs to make to reach the destination.
Input
Line 1 : Two space separated integers a and b, representing The current coordinates of the robot
Line 2 : Two space separated integers x and y representing The coordinates of the robot's destination
Output
Line 1 : An integer representing the number of steps the robot needs to make
Constraints
Example
Input
0 0
1 0
Output
1
*/


var inputs = readline().split(' ');
const robotX = parseInt(inputs[0]);
const robotY = parseInt(inputs[1]);
var inputs = readline().split(' ');
const destX = parseInt(inputs[0]);
const destY = parseInt(inputs[1]);
let steps = 0;

if (destX < robotX) {
    steps += robotX - destX
} else {
    steps += destX - robotX
}

if (destY < robotY) {
    steps += robotY - destY
} else {
    steps += destY - robotY
}

console.log(steps);