/*
What is the sum of all angles in a convex polygon?
For example:
a triangle's angles have a sum of 180°
a square has a sum of 360°
Input
n : number of sides
Output
ang : the sum of all angles in the polygon
or
ERROR : if the sum cannot be computed
Constraints
Example
Input
2
Output
ERROR
*/

let n = readline();
console.log(n < 3 ? "ERROR" : (n-2)*180)