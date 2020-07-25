//Answer 1

let num = Number(prompt("Enter a number :)"),0);
let arr = [];
for(let i=1;i<=num;i++){
    arr.push(i);
}
let filterArray = arr.filter(el=>el%2!=0).map(el=>el**3);
console.log(`Array of cubes of the filtered array is : ${filterArray}`);

//Answer 2

class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in.`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out.`);
        return this;
    }
}
class Moderator extends User{
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins.`);
        return this;
    }
    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins.`);
        return this;
    }
}
class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }    
    deleteCourse(user,course){
        user.courses.pop(course);
        console.log(user);
    }    
}

let user1 = new User("Agalya",20,"agalyayeasudass1912@gmail.com");
let user2 = new User("Dheeraj",19,"dheeraj@gmail.com");
let mod = new Moderator('Arvi',20,'arvi@gmail.com','Moderator');
let admin = new Admin('Charu',25,'charu20001@gmail.com');
let users = [user1,user2,mod,admin];

user1.login();
mod.addCoins(user1).addCoins(user1).addCoins(user1);
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.addCourse(user1,'Blockchain');
admin.deleteCourse(user1);
mod.removeCoins();
user1.logout();

admin.addCourse(user2,'Python');
admin.addCoins(user2);

//Answer 3

//Async await
async function getUserAsync() 
{
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await response.json();
  return data;
}
//getUserAsync().then(data => console.log(data)); 
getUserAsync().then(data => {
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
        if(data[key].completed){
            console.log(data[key]);
        }
    }
  }
});


//Promises
async function getData(){
  let response =await fetch("https://jsonplaceholder.typicode.com/todos");
  let data =await response.json();
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
        if(data[key].completed){
            console.log(data[key]);
        }
    }
  }
}
function promise(){  
  return new Promise((resolve,reject)=>{
    const error = false;
    if(error){
      reject("Oops an error occured:(");
    }
    else{
      resolve();
    }
  })
}
promise().then(getData).catch(error=>console.log(error));
    

//fetch
fetch("https://jsonplaceholder.typicode.com/todos").then(response=>response.json()).then(data=>{
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
        if(data[key].completed){
            console.log(data[key]);
        }
    }
  }
});