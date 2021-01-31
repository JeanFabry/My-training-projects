let button = document.querySelector("button");
let input = document.querySelector("input");
let select = document.querySelector("select")
let countrySelected="BE";

let countries = [
  {
    country: "Belgium",
    code: "BE",
  },{
    country: "France",
    code: "FR",
  }, {
    country: "Italy",
    code: "IT",
  },
];

const fetchName = (name,countrySelected) => {
  return fetch(
    "https://api.agify.io/?name=" + name + "&country_id=" + countrySelected
  );
};

for (let elem of countries) {
  let option = document.createElement('option');
  option.innerText = elem.country
  select.appendChild(option)
  select.addEventListener("change", function () {
  if (select.value==elem.country){
    countrySelected = elem.code;}
        
  })
}

const goFetch = () => {
  let name = input.value
  fetchName(name,countrySelected)
    .then(response => response.json())
    .then(json => {
      let responseDiv = document.createElement('div');
      if (select.value != "Please select a country") {
      responseDiv.innerText =
        "The average age of people with this first name is: " + json.age + " ans. There are currently " + json.count + " people with this first name";
      document.body.appendChild(responseDiv)}
      else { 
        responseDiv.innerText ="Please select a country";
        document.body.appendChild(responseDiv);
      }
    })
    .catch(error => {
      console.log('There was an error!', error)
    })
}
button.addEventListener("click", goFetch);