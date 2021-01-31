console.log("coucou");



let daysAndMonths = [["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]]

const mainDiv = document.createElement("div");
const leftCard = document.createElement("div");
const rightClock = document.createElement("div");
const leftCardUp = document.createElement("div");
const leftCardMiddle = document.createElement("div");
const leftCardDown = document.createElement("div");

document.body.appendChild(mainDiv);
mainDiv.appendChild(leftCard);
mainDiv.appendChild(rightClock);
leftCard.appendChild(leftCardUp); 
leftCard.appendChild(leftCardMiddle); 
leftCard.appendChild(leftCardDown); 

mainDiv.classList.add('mainDiv');
leftCard.classList.add('leftCard');
rightClock.classList.add('rightClock');
leftCardUp.classList.add('leftCardUp');
leftCardMiddle.classList.add('leftCardMiddle');
leftCardDown.classList.add('leftCardDown');

const clock = () => {
let today = new Date(); 
  leftCardUp.innerHTML = daysAndMonths[0][today.getDay()];
  leftCardMiddle.innerHTML =
    today.getDate() + " " + daysAndMonths[1][today.getMonth()];
  leftCardDown.innerHTML = today.getFullYear();
  rightClock.innerHTML = today.toLocaleTimeString();
  let cerise = 0;

  console.log("hello");
  rightClock.innerHTML = "";
  let str = today.toLocaleTimeString();
  rightClock.innerHTML = str;
};

setInterval(clock, 1000);