let button = document.querySelector("button")
pattern = /- ((\w)*(.)?( )?)*/gi;
const async =()=> {fetch("becode.txt")
  .then((response) => response.text())
  .then((text) => {
    const ul = document.createElement("ul");
    let regexResult = text.match(pattern);
    console.log(regexResult);

    for (let elem of regexResult ){
    const li = document.createElement("li");
    li.textContent=elem;
    ul.appendChild(li);
    }
    document.body.appendChild(ul);
  })
  .catch((error) => {
    console.log("There was an error!", error);
  });}

button.addEventListener("click", async)

