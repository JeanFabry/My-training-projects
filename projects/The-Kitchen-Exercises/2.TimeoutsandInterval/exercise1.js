let div = document.createElement('div');
document.body.appendChild(div)

let prout = "prout"
let k =0;
const interval = setInterval(function() {
  div.textContent = prout.substring(0,k++);
  if (k==prout.length+1){
    clearInterval(interval);
  }
}, 1000);

