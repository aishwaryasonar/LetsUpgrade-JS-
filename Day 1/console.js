// Day 1 Assignments

// Answer 1: Various methods in console function are-

/*

1. console.log()
    Mainly used to log(print) the output to the console. We can put any type inside the log(), be it a string, array, object, boolean etc.
    Ex: console.log('abc');  
        console.log(1); 

2. console.error()
    Used to log error message to the console. Useful in testing of code. By default the error message will be highlighted with red color.
    Ex: console.error('This is a simple error'); 

3. console.warn()
    Used to log warning message to the console. By default the warning message will be highlighted with yellow color.
    Ex: console.warn('This is a warning.');

4. console.clear()
    Used to clear the console. The console will be cleared, in case of Chrome a simple overlayed text will be printed like : ‘Console was cleared’ while in firefox no message is returned.
    Ex: console.clear();  

5. console.time() and console.timeEnd()
    Whenever we want to know the amount of time spend by a block or a function, we can make use of the time() and timeEnd() methods provided by the javascript console object. They take a label which must be same, and the code inside can be anything( function, object, simple console).

6. console.table()
    This method allows us to generate a table inside a console. The input must be an array or an object which will be shown as a table.
    Ex: console.table({'a':1, 'b':2}); 

7.console.count()
    This method is used to count the number that the function hit by this counting method.
    Ex: for(let i=0;i<5;i++){ 
        console.count(i); 
        } 
*/

// Answer 2

// Difference between var, let and const

/* 

var: The scope of a variable defined with the keyword “var” is limited to the “function” within which it is defined. If it is defined outside any function, the scope of the variable is global.
var is “function scoped”.

let: The scope of a variable defined with the keyword “let” or “const” is limited to the “block” defined by curly braces i.e. {} .
“let” and “const” are“block scoped”.

const: The scope of a variable defined with the keyword “const” is limited to the block defined by curly braces. However if a variable is defined with keyword const, it cannot be reassigned.
“const” cannot be re-assigned to a new value. However it CAN be mutated.


var is functional scope
let, const are both BLOCK scope
const, cannot be reassigned, however it is mutable

*/

<html> 
  
  <body> 
      <script> 
          // calling x after definition 
          var x = 5; 
          document.write(x, "\n"); 
    
          // calling y after definition  
          let y = 10; 
          document.write(y, "\n"); 
    
          // calling var z before definition will return undefined 
          document.write(z, "\n"); 
          var z = 2; 
    
          // calling let a before definition will give error 
          document.write(a); 
          let a = 3; 
      </script> 
  </body> 
    
  </html>    

// Answer 3: data types in javascript

/*
  
1. JavaScript Strings
    A string (or a text string) is a series of characters like "John Doe".

    Strings are written with quotes. You can use single or double quotes:
Example
var carName1 = "Volvo XC60";   // Using double quotes
var carName2 = 'Volvo XC60';   // Using single quotes

2. JavaScript Numbers
    JavaScript has only one type of numbers.

    Numbers can be written with, or without decimals:

Example
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals

3. JavaScript Booleans
    Booleans can only have two values: true or false.

Example
var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false


4.JavaScript Arrays
    JavaScript arrays are written with square brackets.

Array items are separated by commas.

The following code declares (creates) an array called cars, containing three items (car names):

Example
var cars = ["Saab", "Volvo", "BMW"];

5. JavaScript Objects
    JavaScript objects are written with curly braces {}.

Object properties are written as name:value pairs, separated by commas.

Example
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

6. The typeof Operator
    You can use the JavaScript typeof operator to find the type of a JavaScript variable.

The typeof operator returns the type of a variable or an expression:

Example
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

7. Undefined
    In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

Example
var car;    // Value is undefined, type is undefined

8. Empty Values
    An empty value has nothing to do with undefined.

An empty string has both a legal value and a type.

Example
var car = "";    // The value is "", the typeof is "string"

  */

