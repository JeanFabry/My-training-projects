// Replace every occurence of the word god (with a lower g) with the word deity, the word God (with a capital letter) should be left untouched!

const textB = `In ancient Egypt a god was an entity with the head of an animal and a human body. An egyptian god is not to be mistaken with the God that is worshipped in churches and mosque around the globe these days! God is not a god!`;

const patternB =/god/g

const newSentenceB = textB.replace(patternB,"deity");

const displayB = document.createElement("div");
document.body.appendChild(displayB);
displayB.innerHTML = "Exercise 2: "+newSentenceB;
console.log("newSentence:", newSentenceB);

