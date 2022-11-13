// In the Harry Potter children's books, the sorting hat assigns a new student at Hogwarts School of Witchcraft and' +
// ' Wizardry to one of the four classes, which are Daredevil, Slytherin, Hufflepuff, and Ravenclaw.' +
// ' Write an electronic sorting hat that asks for a student's name and draws a room for him. If you enter Anna as
// the name, for example, the program prints to the HTML document "Anna, you are Ravenclaw." (3p)
//
// Use math.random() to draw a value (1, 2, 3 or 4)
// Once the number is drawn, you need to use a multiple choice structure (if, else if, ..., else or switch).


const  student_name=prompt("Hi ! Enter Your Name:");
const  rand_int=Math.floor(Math.random()*4);

const class_list=[ "Daredevil", "Slytherin", "Hufflepuff", "Ravenclaw"];
if (rand_int == 0) {

    document.write("welcome ***"+student_name+"*** Your Class Is ***"+class_list[0]+"***")

}else if (rand_int == 1){

    document.write("welcome ***"+student_name+"*** Your Class Is ***"+class_list[1]+"***")

}else if (rand_int == 2){

    document.write("welcome ***"+student_name+"*** Your Class Is ***"+class_list[2]+"***")

}else {

    document.write("welcome ***"+student_name+"*** Your Class Is ***"+class_list[4]+"***")

}
