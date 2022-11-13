// Write a program that prompts for three integers. The program prints the sum, product and average of
// the numbers to the HTML document. (3p)
// remember to convert strings to numbers when adding


const GetNumbers1= prompt("Enter three number");
const GetNumbers2= prompt("Enter three number");
const GetNumbers3= prompt("Enter three number");
const int_num1=parseInt(GetNumbers1);
const int_num2=parseInt(GetNumbers2);
const int_num3=parseInt(GetNumbers3);

const sum=int_num1+int_num2+int_num3;

const ave=sum/3;
document.querySelector('#target').innerHTML="The Sum Of Numbers Is:  ("+sum +")   The Average Of Numbers Is: "+ ave



