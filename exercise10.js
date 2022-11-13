
// Make a program that asks the user for the number of dice and the sum of the eye numbers of interest to the
// user. The purpose of your program is now to find out with what probability the number of dice given by the user
// produces the sum of the number of eyes given by the user. For example, if the user enters 3 as the number of dice
// and 17 as the sum of the eyes, the program calculates the probability that the sum of the three dice's eye numbers is 17. (5p)
//
// Solve the problem by simulating: Have the program roll a given number of dice in a for-loop (e.g. 10,000 times) and
// calculate what proportion of the repetitions produced the sum of eye numbers of interest to the user.
// Print the result on the HTML document:

let numDice= prompt("Enter number of dice");
numDice=parseInt(numDice);
let sumEye= prompt("Enter sum of eye number");
sumEye=parseInt(sumEye);
var count=0



let table1 = new Array(numDice+1);
for(let i=0;i<(numDice+1);i++)
    {
        table1[i]=new Array(sumEye+1);
        for(let j=0;j<(sumEye+1);j++)
        {
            table1[i][j]=0;
        }
    }

for(let j = 1; j <= 6 && j <= sumEye; j++)
                table1[1][j] = 1;


for(let i = 2; i <= numDice;i ++){
    for(let j = 1; j <= sumEye; j++){
        for(let k = 1; k < j && k <= 6; k++){
            table1[i][j] += table1[i-1][j-k];
            table1[i][j]=table1[i][j]
            count=table1[i][j]


                }
        }

}
count=count/Math.pow(6,numDice)
count=count.toFixed(2)
count=count*100
document.write("Probability to get sum"+ sumEye+" with" +numDice+" dice is  "+count+"  %" )


