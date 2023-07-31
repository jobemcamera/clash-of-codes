/*
Find the travel time in minutes that the trip takes given the departure and arrival times.
Input
Line 1: A string of the departure time in 24-hour time format of either H:MM or HH:MM
Line 2: A string of the arrival time in 24-hour time format of either H:MM or HH:MM
Output
Minutes that the trip will take.
Constraints
Assume that all times are the same day (ain't nobody like traveling past midnight).
Departure time is always earlier than arrival time.
Example
Input
8:12
14:32
Output
380
*/

const depart = readline();
const arrive = readline();

const [departHours, departMinutes] = depart.split(':')
const [arriveHours, arriveMinutes] = arrive.split(':')

const hours = parseInt(arriveHours - departHours)
const minutes = parseInt(arriveMinutes - departMinutes + (hours * 60))
console.log(minutes);
