/*
You're playing your favorite survival video game and you want to know if you can actually survive through an epic adventure, without having to return home.
The purpose of your adventure is to finish the given period time by having your life health greater than 0.
Each food unit food gives you 2 units of health.
You can start your adventure with different gamemode gamemode : Easy where you lose 1 unit of health each day, Normal where you lose 2 and Hardcore where you lose 3.
Input
Line 1: An integer health for the initial health you have.
Line 2: An integer food for the number of food units you have.
Line 3: An integer time for the number of days you will have to survive.
Line 4: A string gamemode which describes the difficulty of the adventure you are playing.
Output
The resulting health state at the end of your adventure: True or False dependent on your survival and, separated with a space, your final health if any remains.
Constraints
-100 < health < 100
-100 < food < 100
0 <= time <= 30
Example
Input
10
3
7
Easy
Output
True 9
*/

const HEALTH = parseInt(readline());
const FOOD = parseInt(readline());
const TIME = parseInt(readline());
const GAMEMODE = readline();
let healthState = 0;

if(GAMEMODE == "Easy") {
    healthState = HEALTH + (FOOD * 2) - TIME * 1;
} else if (GAMEMODE == "Normal") {
    healthState = HEALTH + (FOOD * 2) - TIME * 2;
} else if (GAMEMODE == "Hardcore") {
    healthState = HEALTH + (FOOD * 2) - TIME * 3;
}

if (healthState > 0) {
    console.log("True", healthState);
} else {
    console.log("False");
}
