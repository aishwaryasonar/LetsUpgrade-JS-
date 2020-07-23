//Answer 1
//take a number from user and write a function which checks whether number is even or odd. assign the result to a variable a log that variable in the console.

let num = prompt("Enter the Number : ");
func(num);
function func(n)
{
    if (num%2 == 0){
        console.log("The number entered is "+n+" and Number is Even");
    }
    else {
        console.log("The number entered is "+n+" and Number is Odd");
    }
} 

//ANSWER 2
//OS Name and Version

let details = prompt("Enter OS name and its version seperated by space : ");
detailsSplit = details.split(" ");
console.log(`The OS name is "${detailsSplit[0]}" and the version is "${detailsSplit[1]}".`); 


//ANSWER 3
//take marks as input from the user and grade him accordingly by using the same code in Conditional Statements, Switch and Ternary Operator

let mark = prompt("Enter your marks : ",0); 

//using conditional statements

    if(mark >= 91 && mark <= 100){
        console.log(`Your marks are ${mark} and the grade is "O" :)`);
    }
    else if(mark >= 81 && mark <= 90){
        console.log(`Your marks are ${mark} and the grade is "A+".`);
    }
    else if(mark >= 71 && mark <= 80){
        console.log(`Your marks are ${mark} and the grade is "A".`);
    }
    else if(mark >= 61 && mark <= 70){
        console.log(`Your marks are ${mark} and the grade is "B+".`);
    }
    else if(mark >= 51 && mark <= 60){
        console.log(`Your marks are ${mark} and the grade is "B".`);
    }
    else{
        console.log(`Sorry, Your marks are ${mark} and the grade is "F"(Fail).Please work hard :(`);
    }

//using switch

    if(mark >= 91 && mark <= 100){
        grade = "O";
    }
    else if(mark >= 81 && mark <= 90){
        grade = "A+";
    }
    else if(mark >= 71 && mark <= 80){
        grade = "A";
    }
    else if(mark >= 61 && mark <= 70){
        grade = "B+";
    }
    else if(mark >= 51 && mark <= 60){
        grade = "B";
    }
    else{
        grade = "F";
    }

    switch (grade) {
        case "O":
            console.log(`Your mark is ${mark} and the grade is "O" :).`);        
            break;
        case "A+":
            console.log(`Your mark is ${mark} and the grade is "A+".`);        
            break;
        case "A":
            console.log(`Your mark is ${mark} and the grade is "A".`);        
            break;        
        case "B+":
            console.log(`Your mark is ${mark} and the grade is "B+".`);        
            break;
        case "B":
            console.log(`Your mark is ${mark} and the grade is "B".`);        
            break;
        default:
            console.log(`Sorry, Your mark is ${mark} and the grade is "F"(Fail).Please work hard :(`);
            break;
    }

//using ternary operator

    let grade =  mark >= 91 && mark <= 100 ? `Your mark is ${mark} and the grade is "O" :)` : 
                 mark >= 81 && mark <= 90 ? `Your mark is ${mark} and the grade is "A+"` : 
                 mark >= 71 && mark <= 80 ? `Your mark is ${mark} and the grade is "A"` : 
                 mark >= 61 && mark <= 70 ? `Your mark is ${mark} and the grade is "B+"` : 
                 mark >= 51 && mark <= 60 ? `Your mark is ${mark} and the grade is "B"` : 
                 `Sorry, Your mark is ${mark} and the grade is "F"(Fail).Please work hard :(`;