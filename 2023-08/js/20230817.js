
/*
A stationary rocket is launched and travels with a constant acceleration of 2 m/s² (meters per second squared).
This means that every second the rocket's speed increases by 2 meters per second.

The rocket reaches its goal in n seconds.

Print the distance traveled (in meters) by the rocket.
Input
n: an integer representing the duration of the rocket's flight (in seconds)
Output
d : the distance traveled by the rocket (in meters)
Constraints
0 < n < 10000
Example
Input
101
Output
10201
*/

const n = parseInt(readline());
console.log(0.5*2*n**2);