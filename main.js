//get a pokemon from the api
//get the data from that pokemon
//display abitilies
//future problems: get a random pokemon by clicking on a button

let html = "";
const namePokemon = document.querySelector("h2");
const url = "https://pokeapi.co/api/v2/pokemon/25/";

async function fetchPokemon() {
  const response = await fetch(url);
  const data = await response.json();
  thisPokemon()
  console.log(data);
}
fetchPokemon();

function thisPokemon() {
    
}