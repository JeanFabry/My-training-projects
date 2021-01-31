//---------variables ---------------------
const mainDivLeft = document.querySelector("main").firstElementChild
mainDivLeft.classList.add("mainDivLeft");
let welcomeScreen = document.querySelector(".welcome");
let welcomeScreenButton = document.querySelector("button");
let select = document.querySelector("select")
let categoryID = 0;

const time = 15000;

//------------functions--------------------
const correctOrNot = (label, correctAnswer) => {
    let labels = document.querySelectorAll('label');
    for (let elem of labels) {
        elem.classList.remove("green");
        elem.classList.remove("red");
    }
    if (label.innerHTML == correctAnswer) {
        label.classList.add("green");
    } else {
        label.classList.toggle("red");
    }
};

const shuffle = (array) => {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    possibilitiesArr = array
}

//-------------- fetch categories ------------------

fetch(
        "https://opentdb.com/api_category.php"
    )
    .then((response) => response.json())
    .then((object) => {
        for (let elements of object.trivia_categories) {
            let categoryOption = document.createElement("option")
            categoryOption.innerHTML = elements.name;
            select.appendChild(categoryOption)

            select.addEventListener("change", function () {
                let category = select.value;
                if (category == elements.name) {
                    categoryID = elements.id
                }
                console.log("categoryIDA:", categoryID);
            })

            //here
        }
    });


//-------------function creation quizz--------------


const questionCreator = () => {

    fetch(
            "https://opentdb.com/api.php?amount=15&category=" +
            categoryID +
            "&difficulty=easy&type=multiple"
        )
        .then((response) => response.json())
        .then((object) => {

            let i = 0;
            while (i < object.results.length) {
                let possibilitiesArr = [];
                let correctAnswer = object.results[i].correct_answer;

                const question = document.createElement("div");
                question.innerHTML = object.results[i].question;

                const possibilities = document.createElement("ul");
                possibilitiesArr.push(object.results[i].correct_answer);
                for (let el of object.results[i].incorrect_answers) {
                    possibilitiesArr.push(el);
                }

                shuffle(possibilitiesArr);

                for (let answer of possibilitiesArr) {
                    const possibility = document.createElement("div");
                    const checkBoxPossibility = document.createElement("input");
                    checkBoxPossibility.type = "radio";
                    checkBoxPossibility.name = "name";
                    const checkBoxLabel = document.createElement("label");
                    checkBoxLabel.innerHTML = answer;
                    possibility.appendChild(checkBoxPossibility);
                    possibility.appendChild(checkBoxLabel);
                    possibilities.appendChild(possibility);

                    checkBoxPossibility.addEventListener("click", function () {
                        correctOrNot(checkBoxLabel, correctAnswer);
                    });
                }

                mainDivLeft.appendChild(question);
                mainDivLeft.appendChild(possibilities);

                let timer = time;
                const timerDiv = document.createElement("div");
                const timing = () => {
                    if (timer > 0) {
                        timerDiv.innerHTML = "You have " + timer / 1000 + " second(s) left";
                        timer -= 1000;
                        setTimeout(timing, 1000);
                        mainDivLeft.appendChild(timerDiv);
                    }
                };
                timing();
                break;
            }
            setTimeout(function () {
                if (i < object.results.length) {
                    i++;
                    mainDivLeft.innerHTML = "";
                    questionCreator();
                }
                if(i == object.results.length){
                    mainDivLeft.innerHTML = "The quizz is over, well done !";
                }
            }, time);
        })
        .catch((error) => {
            console.log("There was an error!", error);
        });
};


// questionCreator();
welcomeScreenButton.addEventListener("click", function () {
    welcomeScreen.style.left = "100vw";
    questionCreator();
});