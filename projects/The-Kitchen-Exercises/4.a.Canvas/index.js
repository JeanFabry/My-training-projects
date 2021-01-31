const canvas = document.createElement("canvas");
canvas.height = 600;
canvas.width = 600;
canvas.style.border = "1px solid black";
const leftPanel = document.createElement("div");
const colorBoxes =document.createElement("div");
const lineSize = document.createElement("div");
lineSize.classList.add('lineSize')
let section = document.querySelector('section');
section.appendChild(leftPanel);
leftPanel.appendChild(colorBoxes);
leftPanel.appendChild(lineSize);

const colors = ["red","blue","green","pink","purple","yellow","orange","grey"]
const lines = [10, 30, 60];
let paintBrushSize=10;

for (let elements of colors){
    const colorBox = document.createElement("div");
    colorBox.classList.add('colorBox');
    colorBox.style.backgroundColor = elements;
    colorBox.addEventListener("click",()=>{
        ctx.fillStyle= elements;})
    colorBoxes.appendChild(colorBox);
}

for (let elements of lines) {
  const lineSizeBox = document.createElement("div");
  lineSizeBox.classList.add("lineSizeBox");
  lineSizeBox.innerHTML = elements+"px";
  lineSizeBox.addEventListener("click", () => {
   paintBrushSize = elements;
  });
  lineSize.appendChild(lineSizeBox);
}

const ctx = canvas.getContext("2d");

// why not create a slider to set the size of the paint brush ? 🤔


// why not create a colorpicker to set the color of brush ? 🤔

let isMouseClickPressed = false;

canvas.addEventListener("mousedown", () => {
  isMouseClickPressed = true;
});

canvas.addEventListener("mouseup", () => {
  isMouseClickPressed = false;
});

canvas.addEventListener("mousemove", (e) => {
  if (isMouseClickPressed) {
    // equivalent of isMouseClickPressed === true
    const x = e.offsetX;
    const y = e.offsetY;

    ctx.fillRect(x, y, paintBrushSize, paintBrushSize);
  }
});

section.appendChild(canvas)