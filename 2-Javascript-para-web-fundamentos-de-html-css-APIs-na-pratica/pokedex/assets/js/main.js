const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToHLi(pokemon) {
  return `
            <li class="pokemon">
          <span class="number">#001</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
            <ol class="types">
              <li class="type">grass</li>
              <li class="type">poison</li>
            </ol>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              alt="${pokemon.name}"
            />
          </div>
        </li>
    `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons) => {
  const listItems = [];


  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    listItems.push(convertPokemonToHLi(pokemon));
  }
  console.log(listItems);
});
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
