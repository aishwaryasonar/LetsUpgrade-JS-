//Answer 1

colors = ["blue","yellow","orange","green","red","Brown","pink","violet"];

let i=0;
setInterval(()=>{  
    document.body.style.backgroundColor = colors[i];  
    i+=1;
},5000); 

//Answer 2

let num = Number(prompt("Enter a number :)",0));
console.log("The number you entered is : "+num);
for(let i=1;i<=10;i++){
    console.log(i+" * "+num+  " = " + num*i);
}

//Answer 3

