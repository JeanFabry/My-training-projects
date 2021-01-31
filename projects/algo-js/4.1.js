// Create a function named calcSurface that takes the length and 
// width of a rectangle and returns its surface. Then create a program that asks the length 
// and width of a rectangle to the user then displays the surface of that rectangle. 
// That program must use the function you created.
// Write a documentation for the calcSurface function.


const readlineSync = require('readline-sync'); //Adapting prompt for console
let length = readlineSync.question('give me a length '); //asking a length to user
let width =  readlineSync.question('give me a width '); // asking a width to user

function calcSurface(length, width) { //function using length and width as arguments 
    return length * width; //returning it's multplication
  }

console.log("the surface of the rectangle is : "+ calcSurface(length, width));