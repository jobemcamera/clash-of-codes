// Archimedes' formula for the area of an arch is as follows: (2/3)(b*h), where h is the height of the arch, and b is the base, or width, of the arch. The goal is to find the Area of an arch using Archimedes' formula.
// Input
// Line 1 A float b: A positive value for the width of the arch
// Line 2 A float h: A positive value for the height of the arch
// Output
// The area of the arch.

// The output should be an integer if it's a whole number, otherwise, round to the hundredth decimal place.
// Constraints
// 0 <= b <= 10000
// 0 <= h <= 10000
// Example
// Input
// 6
// 9
// Output
// 36


const b = parseFloat(readline());
const h = parseFloat(readline());
const area = (2 / 3) * (b * h);

if (Number.isInteger(area)) console.log(area)
else console.log(area.toFixed(2))