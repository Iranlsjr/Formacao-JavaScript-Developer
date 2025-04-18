//  Transformando a lista de Pokémon em uma lista de HTML - PASSO 1
function convertPokemonToHtml(pokemon) {
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
              alt="Imagem do pokemom ${pokemon.name}"
            />
          </div>
        </li>
        `;
}
//Manipular  o LI do HTML  com JS - PASSO 4
const pokemonListHtmlToLi = document.getElementById("pokemonListHtml");

// Function vindo do arquivo poki-api.js
pokeApi.getPokemons()
 //Resultado da lista de pokemon
  .then((pokemonList = []) => {

    //Aplicando MAP manipulação  de lista transformada 
    pokemonListHtmlToLi.innerHTML += pokemonList.map(convertPokemonToHtml).join('')



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
