// In css the box-model is a way to encode four values in a single property.

// padding: top right bottom left

// Write a regex that takes a css property (margin or padding), and rewrites every property using the full notation, for example:

// padding : 5px 0 0 18px;


let variablePad1 = "5px 0 0 18px";

const test1 = document.createElement("div");
test1.className = "test1";
test1.textContent = "test1";

const test2 = document.createElement("div");
test2.className = "test2";
test2.textContent = "test2";

const test3 = document.createElement("div");
test3.className = "test3";
test3.textContent = "test3";

document.body.appendChild(test1);
document.body.appendChild(test2);
document.body.appendChild(test3);

const patternC = /^(0( )?|(\d+(px|%|vh|vw|em)( )?)){0,4}$/gi;

const paddAll = document.querySelectorAll("div");
let paddAllChange;

const paddingChange = (paddingInput) => {
  for (let element of paddAll) {
    paddAllChange = variablePad1.replace(patternC, paddingInput);
    element.style.padding = paddAllChange;
  }
};

paddingChange("10px 10px 10px 10px");