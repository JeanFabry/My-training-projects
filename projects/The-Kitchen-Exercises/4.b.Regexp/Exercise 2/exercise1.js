// In the following sentence replace every occurence of the word clef/clé (including plurals) by the emoji 🔑 with a single pattern.

const sentence = `In french the word "key" used to be written "clef", but now it is written with an accent : "clé".You might find medieval stories, such as the "clefs sanglantes de barbe bleue" and more recents ones "les clés du mystère"`;

const pattern = /cl(e|é)(f)?(s)?/gi;
//other way : / cl(efs | és | ef | é) / gi;


const newSentence = sentence.replace(pattern, "🔑");

const display = document.createElement("div");
document.body.appendChild(display);
display.innerHTML = "Exercise 2: " + newSentence;
console.log("newSentence:", newSentence);

