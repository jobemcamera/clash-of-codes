/*
In game there are certain number of players. After game there be hand shaking.
So we have to find how many shake hands take place in team.
Input
integer n is number of player in a game.
Output
number of shake hands takes place.
Constraints
Example
Input
11
Output
55
*/

const n = parseInt(readline());
let handShakes = 0;

for (let i = n; i > 0; i --) {
    handShakes += i;
}

console.log(handShakes - n);
