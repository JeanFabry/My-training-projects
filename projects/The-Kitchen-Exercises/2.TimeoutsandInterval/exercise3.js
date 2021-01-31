// Create a <div> with a className apple (make a 50px-radius red circle, for example). When you click on it it should fall 400px down on the page, accelarating 1px every 100 milisecond. Once the apple has fallen down 400px, the function should stop. Use the arrow keys to move the apple from left to right. Create a button to reset the position of the apple on top of the screen.

// Use the following snippet to get started.

// let apple = {
//   x: 0,
//   y: 0,
//   a: 0
// }

// function gravity(){
//   apple.a += 1
//   apple.y += apple.a

const reset =document.createElement("button");
document.body.appendChild(reset);
reset.innerHTML="Reset"

const backgroundDiv=document.createElement("div");
document.body.appendChild(backgroundDiv);
const appleDiv = document.createElement("div");
backgroundDiv.appendChild(appleDiv);
backgroundDiv.style.height="400px"

appleDiv.style.backgroundColor="red";
appleDiv.style.height="80px";
appleDiv.style.width="80px";
appleDiv.style.marginTop = "10px";
appleDiv.style.borderRadius="50%";
appleDiv.style.position="relative";
let apple = {
  x: 0,
  y: 0,
  a: 0
}

const direction=(e)=>{
  if (apple.y>0 && apple.y<400){
  if (e.key=="ArrowRight"){
     apple.x += 10;
    appleDiv.style.left = apple.x + "px";
  }
  if (e.key=="ArrowLeft"){
     apple.x -= 10;
     appleDiv.style.left = apple.x + "px";
  }
}
}

function gravity(){
  if (apple.y<400){
  apple.a += 1
  apple.y += apple.a
  appleDiv.style.top = apple.y+"px";
  setTimeout(gravity, 100);}
}

const reseting = () => {
apple.a = 0;
apple.y =0;
apple.x=0;
appleDiv.style.top = apple.y + "px";
appleDiv.style.left = apple.x + "px";
}

appleDiv.addEventListener("click", gravity);
reset.addEventListener("click",reseting);
document.body.addEventListener("keydown", direction);

//other potential way : 
//   let interval = setInterval(function () {
//     if (apple.y < 400) {
//     apple.a += 1;
//     apple.y += apple.a;
//     appleDiv.style.top = apple.y + "px";
//   } else {
//     clearInterval(interval);
//   }},100)
// }
