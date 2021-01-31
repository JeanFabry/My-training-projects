const divs = ["Test sentence", "Regex pattern", "Replacement Input", "Case Sensitive"];

const mainUp = document.createElement('div')
mainUp.classList.add("main");
document.body.appendChild(mainUp);

const labelResults = document.createElement("label");
labelResults.for = "inputD";
labelResults.innerHTML = "Results";
document.body.appendChild(labelResults);

const mainBelow = document.createElement('div')
mainBelow.classList.add("mainBelow");
document.body.appendChild(mainBelow);

const carreColor = document.createElement('div')
carreColor.classList.add("carreColor");
mainUp.appendChild(carreColor);

const inputesDiv = document.createElement("div");
inputesDiv.classList.add("inputesDiv");
mainUp.appendChild(inputesDiv);

let inputValue = [];
let inPute = [];
let pattern;
let flag = "gim";

 function colorSwitch() {
   pattern = new RegExp(inputValue[1], flag);
   if (inputValue[0].match(pattern)) {
     carreColor.classList.add("green");
   } else {
     carreColor.classList.remove("green");
   }
   if (inputValue[2] != undefined) {
     let results = inputValue[0].replace(pattern, inputValue[2]);
     mainBelow.innerHTML = results;
   }
 }

for (let i = 0; i < divs.length; i++) {
  inputValue[0]="";
  const label = document.createElement("label");
  label.innerHTML = divs[i];
  inputesDiv.appendChild(label);

  inPute[i] = document.createElement("input");
  inputesDiv.appendChild(inPute[i]);
  inPute.placeholder = "write something please";

  if (i == divs.length - 1) {
    inPute[i].type = "checkbox";
  }

  inPute[i].addEventListener("keyup", (e) => {
    inputValue[i] = e.target.value;
    colorSwitch();
  });

  inPute[i].addEventListener("click", (e) => {
    if (inPute[3].checked) {
      flag = "gm";
    } else {
      flag = "gim";
    }
    colorSwitch();
  });
};