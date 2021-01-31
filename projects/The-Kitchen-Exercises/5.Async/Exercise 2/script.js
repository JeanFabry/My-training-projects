let button = document.querySelector("button");
const async = () => {
  fetch("becode.json")
    .then((response) => response.json())
    .then((array) => {
      const ul = document.createElement("ul");
      for (let elem of array) {
        const li = document.createElement("li");
        li.textContent = elem;
        ul.appendChild(li);
      }
      document.body.appendChild(ul);
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });
};

button.addEventListener("click", async);
