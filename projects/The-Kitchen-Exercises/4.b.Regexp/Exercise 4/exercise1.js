// Create an HTML file, put the following text in a <p>aragraph.

//     Write a regex to replace all the years in the following text between <strong> tags. (ex: <strong>2009</strong>).
//     Write a regex to put the word before illegal street racing in red.
//     Write a regex to underline any word that is 3 letters or less.

let sentence = document.querySelector('p').innerHTML;
let pattern = [
  {
    regex: /(\d{4})/gi,
    replace: "<strong>$1</strong>",
  },
  {
    regex: /(\w+) (?=\s+illegal street racing)/gi,
    replace: "<span class='red'>$1</span>",
  },
  {
    regex: /( )(\w{0,3})( )/gi,
    replace: "$1<u>$2</u>$3",
  },
];

for (let elements of pattern) {
    sentence = sentence.replace(elements.regex,elements.replace);
}

document.querySelector('p').innerHTML = sentence

// interessant pour ne pas devoir rappeler le "$" => "?=\s+"