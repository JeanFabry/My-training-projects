const list = document.querySelector('ul');
const children = list.childNodes;

//-------- section for removing twins, adding alerts, and putting F&F on the top ------
for (let i=0;i<=children.length-1;i++){
    let child = children[i];
    if (child.nodeType===1) {

        

        if (child.textContent == "Fast and Furious") {
          const firstE = list.firstElementChild;
          child.classList.add("important");
          child.parentElement.insertBefore(child, firstE);

        child.addEventListener("click", function() {
            alert(
              child.textContent +
                ": The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family"
            );
        }) }

        else {
            child.addEventListener("click", function() {
            alert(
              child.textContent); 
        });
        }  

         for (j = i + 1; j <= children.length - 1; j++) {
           let others = children[j];
           if (child.isEqualNode(others)) {
             console.log(others);
              child.parentElement.removeChild(others);
           }
         }
         
    }
}

let fAndF = document.querySelector("li");

//---------------- function for "r" and "d" keypress section -----------------------

function keyup(e) {
    if (e.key == "r") {
        for (let x = 0; x <= children.length - 1; x++) {
            let shuffledFranchise = children[x];
            if (shuffledFranchise.textContent != "Fast and Furious") {
                const randomE =
                  children[1 + Math.floor(Math.random() * children.length)];
                  console.log('Math.random() * children.length:', Math.floor(Math.random() * children.length))
                shuffledFranchise.parentElement.insertBefore(shuffledFranchise, randomE);
            }
        }
    }

    else if (e.key == "d") {
      const clone = fAndF.cloneNode(true);
        list.appendChild(clone);
    }
    
}

//---------------------- funtion for select section -------------------
function important(e) {
  for (let childs of children) {
    if ( e.target.value == 'Important franchise'){
      if (childs.textContent !== "Fast and Furious" && childs.nodeType === 1) {
        childs.style.visibility = "hidden";
      } else if (childs.nodeType === 1) {
        childs.style.visibility = "visible";
      }
    }
    else if ( e.target.value == 'Normal franchise'){
      
      if (childs.textContent == "Fast and Furious" && childs.nodeType === 1) {
        childs.style.visibility = "hidden";
      } 
      else if (childs.nodeType === 1) {
        childs.style.visibility = "visible";
      }
      }

    else if (childs.nodeType === 1) {
        childs.style.visibility = "visible";
}
}
}

//------------------ "r" and "d" keypress section -------------------------------

document.body.addEventListener("keypress", keyup);

//------------------------ Select Section ----------------------------------
const newDiv = document.createElement("div"); 
list.parentElement.insertBefore(newDiv,list);

const select = document.createElement("select");
const option1 = document.createElement("option");
option1.value = "Make a choice";
option1.textContent = "Make a choice";
const option2 = document.createElement('option');
option2.value = 'Important franchise';
option2.textContent = 'Important franchise';
const option3 = document.createElement('option');
option3.value = 'Normal franchise';
option3.textContent = 'Normal franchise';
newDiv.appendChild(select)
select.appendChild(option1)
select.appendChild(option2)
select.appendChild(option3)

select.addEventListener("change", important);
