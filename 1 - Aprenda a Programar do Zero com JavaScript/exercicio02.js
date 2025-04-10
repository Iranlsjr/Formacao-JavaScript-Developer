
// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

let precoGasolina = 6.66;
let precoEtanol = 5.79;
const tipoCombustivel = 'etanol';
let consumoCombustivelKm = 10;
let distanciaKmViagem = 100;

const custoViagemEtanol = ((distanciaKmViagem / consumoCombustivelKm) * precoEtanol);
const custoViagemGasolina = ((distanciaKmViagem / consumoCombustivelKm) * precoGasolina);


if (tipoCombustivel === 'etanol'){
    console.log("O Custo da viagem utilizando etanol foi de: " + custoViagemEtanol.toFixed(2) + ' reais.');
} 
else {
    console.log('O custo da viagem utilizando gasolina foi de: R$' + custoViagemGasolina.toFixed(2) + ' reais.' );
}