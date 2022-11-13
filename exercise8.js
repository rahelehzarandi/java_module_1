// Write a program that prompts the user for the start and end year. The program prints all leap years from the interval
// given by the user. Printing is done in an unordered list to the HTML document. (3p)


let  startYear= prompt("Enter First Year");
startYear=parseInt(startYear);
const  endYear=prompt("Enter End Year");
const  leapYear_list=[];

for (let i = startYear; i <= endYear; i++) {

        if (i % 4 == 0) {
            if (i % 100 == 0) {
                if (i % 400 == 0) {
                    leapYear_list.push(i);

                } else {

                }
            } else {
                leapYear_list.push(i);

            }
        } else {
        }

}
document.writeln("<ol>")
for (let i=0; i < leapYear_list.length;i++){
        document.writeln("<li>"+leapYear_list[i]+"</li>");

document.writeln("</ol>")
}