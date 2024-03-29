/*
It is obligatory for the Muslims to make their rows straight and compact and to close the gaps between them. That is done by standing shoulder-to-shoulder and foot-to-foot.
The distance between rows in a mosque can vary depending on the size of the mosque and the preferences of the congregation. However, typically the distance between rows is around 60-80 centimeters (24-32 inches) to allow enough space for people to comfortably kneel and prostrate during prayer.
You are given the length l and the distance d between the rows of a mosque, your task is to calculate the number of rows in this mosque.
Input
Line 1 l: the length of a mosque is an integer in meters
Line 2 d: the distance between the rows of a mosque is an integer in centimeters
Output
An integer represent the number of rows in the mosque
Constraints
60<=d<=80
Example
Input
50
70
Output
71
*/

const l = parseInt(readline());
const d = parseInt(readline());

console.log(Math.floor(l/(d/100)).toFixed());