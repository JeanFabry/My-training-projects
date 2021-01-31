// Create a function named average(arr) that takes an array of numbers as argument and returns the average.

// Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

// Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

// Create a program that asks a number to the user then generate that same amount of random numbers but 
// also displays their average, min and max. To do so, use the three functions you just created as well as the 
// multiRand(n) function created in Exercise 3.

// Write a documentation for all the functions you created.

const readlineSync = require('readline-sync'); //Adapting prompt for console

function average(arr) { //function giving the average of the random numbers created
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        avrg = sum / arr.length;
    }
    return avrg;
}

function min(arr) { //function giving the minimum of the random numbers created
    return (Math.min.apply(null, arr));
}

function max(arr) { //function giving the maximum of the random numbers created
    return (Math.max.apply(null, arr));
}

function rand10() { //function returning a random number between 0 and 10.
    return Math.floor(Math.random() * 11);
}

function multiRand(n) { //function multirand using the number "n" given by the user as argument
    for (let i = 0; i < n; i += 1) {
        array_new.push(rand10()); // for all numbers from 0 to n, we push the addition of a random number (with rand10) in the new array. Thus creating "n" random numbers
    }
    console.log("the random numbers created are " + array_new) // we ask to show the random numbers in the console
}

let n = readlineSync.question('give me a number'); //we ask a number to the user
let array_new = []; //creates an array "array_new" to add the random number from multirand 
multiRand(n); // we call the function multirand and create the random numbers
console.log("the maximum of the random numbers is " + max(array_new)); //we show the maximum of the random numbers using the max function
console.log("the minimum of the random numbers is " + min(array_new)); //we show the minimum of the random numbers using the min function
console.log("the average of the random numbers is " + average(array_new)); //we show the average of the random numbers using the average function