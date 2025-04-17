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

//Fetch  API - Biblioteca - PASSO 3
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

//Fazer requisição - Promise OPÇÃO 2 Arrow Function - Para reduzir o código PASSO 4
fetch(url)
  //Converter Body ReadableStream para Json
  .then((response) => response.json())

  //Retorno do Json, pegar o resultado  da lista  do Json
  .then((jsonBody) => jsonBody.results)

  //Resulvado da lista de pokemon
  .then((pokemonList) => {

    // Chamando a Lista de pokemon ToHtml com FOR - PASSSO 5
    for (let i = 0; i < pokemonList.length; i++) {
      const pokemon = pokemonList[i];

      //console.log(convertPokemonToHtml(pokemon))
      // Adicionando um item - PASSO 6
      pokemonListHtmlToLi.innerHTML += convertPokemonToHtml(pokemon);
    }
  })
  /*.then((jsonBody) => console.log(jsonBody))*/
  //Caso haja algum erro na requisição
  .catch((error) => console.log(error))
  //Informar que  a requisição foi concluída independe de erro ou não
  .finally(() => console.log("Requisição concluída."));

//-----------------------------------------------------------------------------------------------------------------------
//Fazer requisição - Promise OPÇÃO 1 - Declarativa convencional -Callback PASSO 4

// fetch(url)
//Converter Body ReadableStream para Json
// .then(function (response) {
//   return response.json();
// })
//-----------------------------------------------------------------------------------------------------------------------

//Retorno do Json
// .then(function (jsonBody) {
//   console.log(jsonBody);
// })
//-----------------------------------------------------------------------------------------------------------------------

//Caso haja algum erro na requisição
// .catch(function (error) {
//   console.log(error);
// })
//-----------------------------------------------------------------------------------------------------------------------

//Informar que  a requisição foi concluída independe de erro ou não
// .finally(function () {
//   console.log("Requisição concluída.");
// });
//-------------------------------------------------------------------------------------------------




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
