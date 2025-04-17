//Fetch  API - Biblioteca
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//Fazer requisição
fetch(url).then(function(response){
  console.log(response)
})

// function convertPokemonToLi(pokemon) {
//   return `
//             <li class="pokemon">
//           <span class="number">#0${pokemon.number}</span>
//           <span class="name">${pokemon.name}</span>

//           <div class="detail">
//             <ol class="types">
//               ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')} 
//             </ol>
//             <img src="${pokemon.photo}"
//               alt="${pokemon.name}"
//             />
//           </div>
//         </li>
//     `;
// }

// const pokemonList = document.getElementById("pokemonList");

// pokeApi.getPokemons().then((pokemons  = []) => {
//     const newHtml = pokemons.map(convertPokemonToLi).join('')
//     pokemonList.innerHTML =  newHtml
// })

//   const listItems = [];


//   for (let i = 0; i < pokemons.length; i++) {
//     const pokemon = pokemons[i];
//     listItems.push(convertPokemonToHLi(pokemon));
//   }
/*.then((jsonBody) => console.log(jsonBody))*/
/* FUNCTION é o mesmo resultado da funcão de cima.
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonBody) {
    console.log(jsonBody);
  })

  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {
    console.log("Requisição concluída");
  });*/
