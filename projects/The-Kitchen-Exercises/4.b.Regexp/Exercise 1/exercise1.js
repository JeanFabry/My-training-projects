// Write a regular expression to replace every occurence of Emily with Kelian in the following constant.

const text = `Emily is probably the best coach I've ever had. I'm an absolute fan of Emily's exercices on regular expressions. 
I wouldn't be as fluent in JavaScript if I had not crossed Emily's path`;

const pattern =/emily/gi

const newSentence = text.replace(pattern, "Killian");

const display = document.createElement('div');
document.body.appendChild(display);
display.innerHTML= "Exercise 1: "+newSentence;
