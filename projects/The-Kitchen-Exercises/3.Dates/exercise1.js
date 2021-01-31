cities = [
    {
        name: "Anchorage",
        offset: -9
    },
    {
        name: "Reykjavik",
        offset: 0
    }, {
        name: "Saint-Petersburg",
        offset: 3
    },
    {
        name: "Brussels",
        offset: 1
    }
]
// function to calculate local time
// in a new city
// given the city's UTC offset

function screen () {
document.body.innerHTML="";
for(element of cities) {
const dateOffset = calcTime(element.offset)
const display = document.createElement("div");
display.innerHTML = "The time in " + element.name + " is " + dateOffset.toLocaleString();
document.body.appendChild(display)

}

function calcTime(offset){
  d = new Date();
  console.log(d);
  // convert to msec
  // add local time offset
  // get UTC time in msec
  
  // getTime() is the time of your CURRENT LOCATION, which is why we need to do getTimezoneOffset() to convert it to the central UTC-0 time
utc = d.getTime() + d.getTimezoneOffset() * 60 * 1000;

  console.log(utc);
  // create new Date object for different city
  // using supplied offset in parameters

  nd = new Date(utc + 3600 * 1000 * offset);
  console.log(nd);
  // return time as a string;

  return nd;
}
}
setInterval(screen,1000)


