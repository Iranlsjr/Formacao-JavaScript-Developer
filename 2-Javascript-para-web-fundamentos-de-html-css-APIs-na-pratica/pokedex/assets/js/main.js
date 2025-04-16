const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPkemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)

}
function convertPokemonToHLi(pokemon) {
  return `
            <li class="pokemon">
          <span class="number">#0${pokemon.order}</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
            <ol class="types">
              ${convertPkemonTypesToLi(pokemon.types).join('')} 
            </ol>
            <img
              src="${pokemon.sprites.other.dream_world.front_default}"
              alt="${pokemon.name}"
            />
          </div>
        </li>
    `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons  = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToHLi).join('')

})

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
