let myBirthday = new Date("1994-04-15");
let deathOfJohnny= new Date("2017-12-05");
let today = new Date();
let birthday = document.createElement("p");

let linebreak = "</br>"
let myAge = today-myBirthday;
birthday.innerHTML =
  Math.floor(myAge/(24*60*60*1000)) +
  " days have passed since i was bord on the " + myBirthday + linebreak;
 document.body.appendChild(birthday);

 
birthday.innerHTML +=
  deathOfJohnny / (24 * 60 * 60 * 1000) +
  " days have passed since Johnny Halliday died " +
  myBirthday;
document.body.appendChild(birthday);