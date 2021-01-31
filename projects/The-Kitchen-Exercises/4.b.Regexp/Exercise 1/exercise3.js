// Use the text from exercise two and split it into an array of words (using split(' ')). Create a text input, listen for keyup events and return an array of words that matches the value entered in the input using a case insensitive pattern.

// For example: if I enter eg in the input, the array should contain ['Egypt', 'egyptian']

const textC = `In ancient Egypt a god was an entity with the head of an animal and a human body. An egyptian god is not to be mistaken with the God that is worshipped in churches and mosque around the globe these days! God is not a god!`;

const textCArr=textC.split(' ');
console.log('textCArr:', textCArr)


const displayC = document.createElement("div");
document.body.appendChild(displayC);
displayC.innerHTML = "Exercise 3: "+textC;

const userInput = document.createElement("input");
userInput.type = "text";
document.body.appendChild(userInput);

const answerDiv = document.createElement("div");
document.body.appendChild(answerDiv);

userInput.addEventListener("keyup", (e) => {
  const inputValue = e.target.value;
  const pattern = new RegExp(inputValue, "gi");
  let answerArr = [];
    for (let elements of textCArr){
  if (elements.match(pattern)) {
      answerArr.push(elements);
  }
}
 answerDiv.innerHTML = answerArr;
});
