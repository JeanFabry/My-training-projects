// Using timestamps, find the exact time and date we will be in 80000 hours.

// Write a function to display the time and date for any amount of hours given in the future. Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input.

document.body.style.display = "flex";
document.body.style.flexDirection = "column";

let input = document.createElement('input');
document.body.appendChild(input);

const answerDiv = document.createElement("div");
document.body.appendChild(answerDiv);

let today = new Date();

const getWhen = (x) => {
let switchToMilli= today.getTime();
let milliInEight = switchToMilli + (x*60*60*1000);

let answer = new Date(milliInEight);

answerDiv.innerHTML=answer;}

input.addEventListener("keyup",function () {
    answerDiv.innerHTML="";
getWhen(input.value);
console.log("input.value:", input.value);
});
