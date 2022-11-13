// Write a program that asks the user to enter a year and notifies the user whether the input year is a leap year.
//     A year is a leap year if it is divisible by four. However, years divisible by 100 are leap years only if they
// are also divisible by 400. Print the result on the HTML document. (3p)
//leap year( 1892-1896-1900-1904...2016-2020-2024-2028-2032-2036-)

const GetYear= prompt("Enter Year:");
if (GetYear % 4 == 0){
    if (GetYear % 100 ==0){
        if (GetYear % 400 ==0){
            document.write("LEAP YEAR")

        }else {
            document.write("NOT leap year")

        }
    }else {
        document.write("LEAP YEAR")

    }
}else {
    document.write("NOT leap year")
}