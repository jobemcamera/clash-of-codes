/*
Help Jack Goff find a seat in classroom which is at equal distance from his friend Bob and crush Erica such that he's as near to them as possible.
It is guaranteed that a seat always exist in middle of Bob and Erica, as they are either sitting in the same row or same column or sitting diagonally to each other.
Input
The first line contains row and column number of Bob's seat: rb cb
The second line contains row and column number of Erica's seat: re ce
Output
Output the row and column number of Jack's seat: rj cj
Constraints
1≤ rb, cb, re, ce ≤ 10
Example
Input
1 3
3 1
Output
2 2
*/

var inputs = readline().split(' ');
const rb = parseInt(inputs[0]);
const cb = parseInt(inputs[1]);
var inputs = readline().split(' ');
const re = parseInt(inputs[0]);
const ce = parseInt(inputs[1]);

const rj = Math.floor(rb + re)/2
const cj = Math.floor(cb + ce)/2
console.log(rj,cj)

