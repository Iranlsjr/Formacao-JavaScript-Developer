// Consumo da API
const pokeApi = {};

// Incluindo Detalhes do Pokemon FUNCTION
pokeApi.getPokemonDetails = (pokemonsListDetails) => {
  return fetch(pokemonsListDetails.url).then((response) => response.json());
};

pokeApi.getPokemons = () => {
  //Fetch  API - Biblioteca - PASSO 3
  const offset = 0;
  const limit = 3;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  //Fazer requisição - Promise OPÇÃO 2 Arrow Function - Para reduzir o código PASSO 4
  return (
    fetch(url)
      //Converter Body ReadableStream para Json
      .then((response) => response.json())

      //Retorno do Json, pegar o resultado  da lista  do Json
      .then((jsonBody) => jsonBody.results)

      // Incluindo Detalhes do Pokemon retorno da function pokeApi.getPokemonDetails
      .then((pokemonsListDetails) =>
        pokemonsListDetails.map(pokeApi.getPokemonDetails)
      )
      .then((detailRequests) => Promise.all(detailRequests))
      .then((pokemonsDatails) => pokemonsDatails)

      //Caso haja algum erro na requisição
      .catch((error) => console.log(error))
      //Informar que  a requisição foi concluída independe de erro ou não
      .finally(() => console.log("Requisição concluída."))
  );
};

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