//Question 1

//Create a for loop that iterates upto 100 while outputing "fizz" at the multiples of 3, "buzz" at the multiples of 5, and "fizzbuzz" at multiples of 3 and 5.

for(let i=1;i<=100;i++){
    if(i%3 == 0 && i%5 == 0){
        console.log(`For the number ${i}, the result is : fizzbuzz.`);
    }
    else if(i%3 == 0){
        console.log(`For the number ${i}, the result is : fizz.`);
    }
    else if(i%5 == 0){
        console.log(`For the number ${i}, the result is : buzz.`);
    }
}

//Question 2

let student = {
    name:"Helsinki",
    age:24,
    projects : {
        diceGame : "Two player dice game with Javascript.",
    },
}

//destructuring
 
const {name, age, projects:{diceGame}} = student;
console.log(name);
console.log(age);
console.log(diceGame);

//Question 3

shoppingList = ["Cake","Chocolates","Cornflakes","Popcorn","Pickle"];
shoppingBasket = [...shoppingList];
shoppingBasket.push("Icecream","Lays");
console.log(`Shopping list contains : ${shoppingList}.`);
console.log(`Shopping basket contains : ${shoppingBasket}.`);

//Question 5

let sales = Number(prompt("Enter the sales during this year :)"));
if(sales>=0 && sales<=5000){
    console.log(`Total commission amount earned by him is : ${sales+(sales*2/100)}.`);
}
else if(sales>=5001 && sales<=10000){
    console.log(`Total commission amount earned by him is : ${sales+(sales*5/100)}.`);
}
else if(sales>=10001 && sales<=20000){
    console.log(`Total commission amount earned by him is : ${sales+(sales*7/100)}.`);
}
else{
    console.log(`Total commission amount earned by him is : ${sales+(sales*10/100)}.`);
}

//Question 6

let num = 0;
do{
    num = Number(prompt("Enter a number greater than 100 :)"));
}while(num<100);

//Question 7

let n = Number(prompt("Enter a number greater than 1 :)"));
console.log(`The prime nuumbers from 2 to ${n} are :`);
for (var i = 2; i <= n; i++) {

    var notPrime = false;
    for (var j = 2; j <= i; j++) {
        if (i%j===0 && i!==j) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        console.log(i);
    }
}

//Question 8

let ask = (question,yes,no)=>{
    if(confirm(question)) yes()
    else no();
}
ask(
    "Do you agree?", 
    yes = ()=>{alert("You agreed.");}, 
    no = () =>{alert("You canceled the execution.");}
);  

