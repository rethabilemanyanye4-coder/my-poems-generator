function displayPoem(response){

new Typewriter("#poem-ai", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor:"",
});

}

function generatePoem(event){
 event.preventDefault();  

 let instructionsInput= document.querySelector("#user-instructions")
let apiKey= "f471a068ffaaf7bot45233b482c5cd2d";
let prompt= `User instructions:Generate a english poem about ${instructionsInput.value}`;
let context= "You are a romatic poem expert and love to write short poems.Your mission is to generate a 4 lined poem in basic HTML and separate each line with a <br/> dont incluse heading of poem. Make sure to follow the user instructions. Sign poem with 'SheCAODES.AI' IN BOLD inside a <strong> element at the end pf a poem";
let apiUrl= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
console.log(`Prompt: ${prompt}`);
console.log(`Generating poem`);
console.log(`context: ${context}`);
 
 // Make a call to the API
 axios.get(apiUrl).then(displayPoem);
 //Display the generate poem

 
 
}
let poemformElement = document.querySelector("#poem-generator-form");
poemformElement.addEventListener("submit", generatePoem);