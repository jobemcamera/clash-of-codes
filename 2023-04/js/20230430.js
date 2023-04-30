/*
Simon the firefighter has to rescue a family from a burning building. The family is located on an upper floor, but unfortunately the fire has already spread and the stairs are not accessible anymore.
Build a ladder for Simon so he can reach the family and rescue them.

For every floor you have to print 1 ladder segment. 1 segment looks like this:

#  #
####
#  #

Two segments look like this:

#  #
####
#  #
####
#  #
Input
An integer floor, on which the family is located.
Output
The ASCII ladder.
Constraints
1 <= floor <= 32
Example
Input
2
Output
#  #
####
#  #
####
#  #
*/

const floor = parseInt(readline());
const vertical = "#  #";
const horizontal = "####";

if (floor == 1) {
    console.log(`${vertical}\n${horizontal}\n${vertical}`);
} else {
    console.log(`${vertical}\n${horizontal}\n${vertical}`);
    for (let i = 1; i < floor; i++) {
        console.log(`${horizontal}\n${vertical}`)
    }
}
