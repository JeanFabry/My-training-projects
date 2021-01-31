// Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

let div2 = document.createElement("div");
let div3 =document.createElement('div');
document.body.appendChild(div2);
document.body.appendChild(div3);

let sec = 0;
let min = 1+ sec/60;
const inter = setInterval(function () {
  div2.innerHTML = "Number of seconds already spent on this page " + sec++;
  if (sec%60===0){
    div3.innerHTML=min++ + " minute(s) has passed"
  }
  }, 1000);