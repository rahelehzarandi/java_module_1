// Write a program that asks the user for the number of dice rolls. The program throws all the dice once and
// prints the sum of the numbers.

const numberDice= prompt("Enter Number Of Dice Rolls");
const numberDice_1=parseInt(numberDice);
var sum_roll=0;
var rool=0;

for (let i =1 ;i <=numberDice_1 ; i++) {
    rool = Math.floor(Math.random() * 6) + 1;
    sum_roll = sum_roll + rool;
}

console.log("the sum of rolls is:",+sum_roll);