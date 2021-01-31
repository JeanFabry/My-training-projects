// Create a function named rand10() that returns a random integer between 1 and 10. 
// Create a program that will display the result of that function each time it is run.

// Write a documentation for the rand10() function.

// You will have to search on Google how to generate random numbers in JavaScript for this exercise.
function rand10(){ //function rand10
 return Math.floor(Math.random() * 11); //return a random between 0 and 10. You can change the "11" by any number to get a random number between 0 and "that number -1"
}
rand10();