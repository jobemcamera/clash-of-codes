/*
It is the end of a Clash Royal match, and to win, you have to summon a fireball and hit the enemy tower so it gets destroyed! A level one fireball deals 200 damage. Each level higher adds 20 to the damage. Figure out if you can win just in time!

P.S.: if the enemy tower has 0 health, you win!
Input
Line 1: An integer health: your enemy's tower's health
Line 2: An integer level: your rocket level
Output
Line 1: a string of hehehehaw if you win, or rawr if you lose.
followed by a space, and then: an integer for the enemy tower's health left
Constraints
1 <= health <= 1000
1 <= level <= 30
Example
Input
250
12
Output
hehehehaw -170
*/

const health = parseInt(readline());
const level = parseInt(readline());
const damage = 200 + (level - 1) * 20;

if (damage > health) {
    console.log('hehehehaw', health - damage);
} else if (damage < health) {
    console.log('rawr', health - damage);
} else {
    console.log('hehehehaw', health - damage);
}

