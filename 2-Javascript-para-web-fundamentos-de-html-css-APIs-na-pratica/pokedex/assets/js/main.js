// Lista de tipos - Detalhes do Pokemon- Function
function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map(
    (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`,    
  );
}

//  Transformando a lista de Pokémon em uma lista de HTML - PASSO 1
function convertPokemonToHtml(pokemon) {
  return `       
    <li class="pokemon">
          <span class="number">#${pokemon.id}</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
            <ol class="types">
            ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>
            <img
              src="${pokemon.sprites.other.dream_world.front_default}"
              alt="Imagem do pokemom ${pokemon.name}"
            />
          </div>
        </li>
        `;
}
//Manipular  o LI do HTML  com JS - PASSO 4
const pokemonListHtmlToLi = document.getElementById("pokemonListHtml");

// Function vindo do arquivo poki-api.js
pokeApi
  .getPokemons()
  //Resultado da lista de pokemon
  .then((pokemonList = []) => {
    //Aplicando MAP manipulação  de lista transformada
    const newHtml = pokemonList.map(convertPokemonToHtml).join("");
    pokemonListHtmlToLi.innerHTML = newHtml;

    //Criando uma nova  lista
    //const listItems  = []
    // Chamando a Lista de pokemon ToHtml com FOR - PASSSO 5
    // for (let i = 0; i < pokemonList.length; i++) {
    //   const pokemon = pokemonList[i];
    //   // Adicionando um item - PASSO 6
    //   listItems.push(convertPokemonToHtml(pokemon))
    //   //console.log(convertPokemonToHtml(pokemon))
    // }
    //console.log(listItems)
  });
