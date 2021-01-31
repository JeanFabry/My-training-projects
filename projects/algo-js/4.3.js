// By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) 
// that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() 
// to achieve this.

// Write a documentation for the multiRand(n) function.

// Use that function to create a program that will ask the number of 
// random numbers to generate then display that same number of random numbers.

const readlineSync = require('readline-sync'); 

let n = readlineSync.question('give me a number');

function rand10() { //function rand10
    return Math.floor(Math.random() * 11); //return a random between 0 and 10. You can change the "11" by any number to get a random number between 0 and "that number -1"
}

function multiRand(n) { //function multirand using the number "n" given by the user as argument
    let array_new = []; //creates an array "array_new"
    for (let i = 0; i < n; i+=1) { 
        array_new.push(rand10()); // for all numbers fro 0 to n, we push the addition of a randomnumber (with rand10) in the new array
    }
    console.log(array_new) // we ask to show the array in the console
}

multiRand(n); // we call the function 


