
// Answer 1
// Write a js code which takes input from the user and logs it in the console

console.log("Hello, World!");
prompt("What is your name?");

// Answer 2
//Explain with examples the remaining methods of String and Array

let text = "The quick brown fox jumps over the wall";

console.log(text);

//String methods:-

// To check the length
console.log(text.length)

// To change the case
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// Accessing the index
console.log(text[5]);

console.log(text.indexOf('o'));

console.log(text.lastIndexOf('o'))

console.log(text.charAt('12'));

console.log(text.endsWith("well"));

console.log(text.split('e'));

console.log(text.includes("world"));

console.log(text.search("jumpss"));


//Array methods

let arr = ['one', true, 32, ['1','2']];
let arr2 = ['rio', 'berlin','alicia'];
console.log(arr);


console.log(Array.isArray(arr));
// indexOf('value')

console.log(arr.reverse())

console.log(arr[3]);

console.log(arr.concat(arr2));

// Appending an element
// At the start
arr2.unshift('tokyo');
console.log(arr2);
// At the end
arr2.push('helsinki');
console.log(arr2);

// Removing an element
// From the start
arr2.shift('tokyo');
console.log(arr2);

// From the end
console.log(arr2.pop());

//Copy the first two array elements to the last two array elements
arr2.copyWithin(2, 0);

//Fill all the array elements with a static value
arr2.fill("Kiwi");