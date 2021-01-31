const input= document.querySelector('textarea');
const answerDiv = document.querySelector(".translation");
let translated;

input.addEventListener("keyup", function() {
    let toTranslate= input.value;
    markdownToHtml(toTranslate);
    answerDiv.innerHTML=translated;
})

 const markdownToHtml=(toTranslate)=> {
   translated = toTranslate
     .replace(/^### (.*$)/gim, "<h3>$1</h3>")
     .replace(/^## (.*$)/gim, "<h2>$1</h2>")
     .replace(/^# (.*$)/gim, "<h1>$1</h1>")
     .replace(/^\* (.*$)/gim, "<ul><li>$1</li></ul>")
     .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>")
     .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
     .replace(/\*(.*)\*/gim, "<em>$1</em>")
     .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
     .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
     .replace(/\n/gim, "<br />");

   return translated.trim();
 }

