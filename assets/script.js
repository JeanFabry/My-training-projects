//Cards Content filling

let imageProjectsJs = document.querySelectorAll(".javascriptImg");
let imageProjectsHtml = document.querySelectorAll(".htmlImg");

    let titleProjectsJs = document.querySelectorAll(".cardTitle");
    let titleProjectsHtml = document.querySelectorAll(".cardTitleHtml");

    let cardsJS = document.querySelectorAll(".javascriptCard");
    let cardsHtml= document.querySelectorAll(".htmlCard");

let contentJS = document.querySelectorAll(".contentJS")
let contentHtml = document.querySelectorAll(".contentHtml")

    console.log(titleProjectsJs);

const jsonToCards= (dataJSON, image, title, card,content)=>{
 let result = [];
        for (let i in dataJSON)
          result.push([i, dataJSON[i]]);

        for (let i = 0; i < image.length; i++) {
          image[i].src = result[i][1]
            ['img'];
          title[i].innerHTML = result[i][0];
          content[i].innerHTML=result[i][1]["description"];

          card[i].addEventListener("click", function() {
            // window.location = result[i][1]
            //   ['link'];
                window.open( 
              result[i][1]
              ['link'], "_blank");
          })
        }
}
   

    fetch('./assets/data.json')
      .then(response => response.json())
      .then(json => {
          jsonToCards(json,imageProjectsJs,titleProjectsJs,cardsJS,contentJS);
      })

        fetch('./assets/dataHTML.json')
      .then(response => response.json())
      .then(json => {
          jsonToCards(json,imageProjectsHtml,titleProjectsHtml,cardsHtml,contentHtml);
      })

// DropDown content filling
    let dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = "none";
    let trigger = false;

    let dropdownTrigger = document.querySelector('.dropdown-trigger');
    dropdownTrigger.addEventListener("click", function() {
      if (!trigger) {
        dropdownMenu.style.display = "block";
        trigger = true;
      } else {
        dropdownMenu.style.display = "none";
        trigger = false;
      }
    })