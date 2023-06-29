/*
Given a string representing the item you are currently looking at item while dumpster diving, you must output whether to YEET or to YOINK the item depending on if it is in your wishlist or not.

To "YEET" something means to throw it (discard) and to "YOINK" something means to grab it (keep).
Input
Line 1: Comma-and-space-separated strings wishlist containing the items you wish to keep if found.
Line 2: An integer N for the number of items found in the dumpster.
Next N lines: A case-sensitive string item representing the item you are currently looking at.

Output
N lines: Your response to the item being looked at.
YEET if you should keep the item.
YOINK if you should discard the item.

Constraints
1 ≤ N ≤ 100

Example
Input
Cup, Table, TV
1
TV

Output
YOINK
*/

const wishlist = readline(); // The list containing the items to search for.
const N = parseInt(readline()); // The amount of items you will dig through.
const responses = [];

for (let i = 0; i < N; i++) {
    const item = readline();

    if (wishlist.includes(item)) {
        responses.push('YOINK');
    } else {
        responses.push('YEET');
    }
}

for (const response of responses) {
    console.log(response);
}