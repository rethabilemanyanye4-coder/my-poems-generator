function generatePoem(event){
 event.preventDefault();  

 new Typewriter("#poem-ai", {
  strings: "The poem goes here",
  autoStart: true,
  delay: 1,
  cursor:"",
});

 
}
let poemformElement=document.querySelector("#poem-generator-form");
poemformElement.addEventListener("submit", generatePoem);