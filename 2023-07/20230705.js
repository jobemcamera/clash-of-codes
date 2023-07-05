/*
Raymond forgets things very often, so he keeps track of a to-do list. However each day he still forgets to do things from his to-do list. Given a daily to-do list (of length T) and what he did for the day (of length N), remind Raymond by outputting what he forgot about, sorted ALPHABETICALLY.
Input
Line 1: An integer T, the length of the to-do list.
Next T lines: Each task in the to-do list.
Line T+2: An integer N, the amount of tasks Raymond completed.
Next N lines: Each task of the to-do list that Raymond completed.
Output
Every task that Raymond forgot for each line, sorted alphabetically.
Constraints
1 ≤ T ≤ 10
1 ≤ N ≤ 10
Example
Input
4
Take out the rubbish
Walk the dog
Do the dishes
Clean the living room
3
Take out the rubbish
Clean the living room
Do the dishes
Output
Walk the dog
*/

const T = parseInt(readline());
let toDoList = [];
for (let i = 0; i < T; i++) {
    const item = readline();
    toDoList.push(item);
}
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    const done = readline();
    let index = toDoList.indexOf(done);
    if(index > -1) {
        toDoList.splice(index, 1)
    }
}
toDoList.sort().forEach((item) => console.log(item))
