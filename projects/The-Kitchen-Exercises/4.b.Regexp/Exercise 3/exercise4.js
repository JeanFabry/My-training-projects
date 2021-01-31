//----------------- VARIABLES & FUNCTIONS ---------------

const divs = [
  {
    name: "First name",
    regex: [/^([a-z]|-|ç)+$/gi],
    placeholder: "Eric",
    type: "text",
    verif: 0,
  },
  {
    name: "Email",
    regex: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g],
    placeholder: "eric@gmail.com",
    type: "email",
    verif: 0,
  },
  {
    name: "Password",
    regex: [/[a-z]+/g, /[A-Z]+/g, /([0-9]+)/g, /[\W_]+/g, /.{8,18}/g],
    placeholder: "********",
    type: "password",
    verif: 0
  },
];

let inputValue = "";

const counting = (sum) => {verificationCountdown.innerHTML = sum +'/3';}


//----------------- DIVS CREATION ---------------
const main = document.createElement("main");
document.body.appendChild(main);

const mainUp = document.createElement('div')
mainUp.classList.add("mainA");
main.appendChild(mainUp);

const h1 = document.createElement('h1')
mainUp.classList.add("h1");
h1.innerHTML = "BeKnit";
mainUp.appendChild(h1);

const subtitle = document.createElement('h2')
subtitle.classList.add("subtitle");
subtitle.innerHTML = "In knitting we trust";
mainUp.appendChild(subtitle);;

const mainDown = document.createElement('div')
mainDown.classList.add("mainDown");
main.appendChild(mainDown);

const profileCompletionDiv = document.createElement('div')
profileCompletionDiv.classList.add('profileCompletionDiv')
mainDown.appendChild(profileCompletionDiv)

const profileCompletion = document.createElement('h2')
profileCompletion.innerHTML = "Profile completion"
profileCompletionDiv.appendChild(profileCompletion);

const verificationCountdown = document.createElement("div");
verificationCountdown.innerHTML = "0/3";
verificationCountdown.classList.add("verificationCountdown");
profileCompletionDiv.appendChild(verificationCountdown);

const inputesDiv = document.createElement("form");
inputesDiv.classList.add("inputesDiv");
mainDown.appendChild(inputesDiv);

//----------------- FORM CREATION ---------------


for (let element of divs) {
    const label = document.createElement("label");
    label.innerHTML = element.name;
    inputesDiv.appendChild(label);

    const input = document.createElement("input");
    inputesDiv.appendChild(input);
    input.placeholder = element.placeholder;
    input.type = element.type;

    const wrong = document.createElement("div");
    wrong.classList.add("wrong");
    inputesDiv.appendChild(wrong);

    //----------------- FORM ALGO ---------------

    input.addEventListener("keyup", function (e) {
        let passRegex = true;
        inputValue = e.target.value
        for (let elem of element.regex) {
            if (!inputValue.match(elem)) {
                passRegex = false;
            }
            if (passRegex) {
                input.classList.add("inputGreen");
                input.classList.remove("inputRed");
                wrong.innerHTML = "";
                element.verif=1;
            }
            else if (!inputValue){
                element.verif = 0;
            }

            else {
                input.classList.add("inputRed");
                input.classList.remove("inputGreen");
                wrong.innerHTML = "Invalid "+ element.name
                element.verif = 0;
            }

        }
    })
}

//----------------- PROFILE INCREMENTATION ---------------

document.body.addEventListener("keyup", function (e) {
    let somme = 0; 
    for (let element of divs){
        somme+=element.verif;     
    }
    counting(somme);
})
