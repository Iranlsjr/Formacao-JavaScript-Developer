// Faça um programa para calcular o valor  de uma viagem.

// Você terá 3 variáveis. Sendo elas:
// 1 - Preço do  combustivél;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem; 

// Imprima no console o valor que será gasto de  combustível para realizar esta viagem.

const precoCombustivel  =  5.79;
const KmPorLitros = 10;
const distanciaPorKm = 100;

const  litrosComsumidos = distanciaPorKm / KmPorLitros;
const valorGasto = litrosComsumidos *precoCombustivel;

console.log('O valor gasto para realizar a viagem é: R$' + valorGasto.toFixed(2) + ' reais.');