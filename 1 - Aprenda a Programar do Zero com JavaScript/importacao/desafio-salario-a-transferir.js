// Faça um programa que calcule e imprima o salário a ser transferido para um funcionárop.
//     Para realizar o calculo receba o valor bruto do salário e o adicionao dos beneficios.
//     O salário a ser transferido é calculado da sequinte maneira.

//       Valor bruto do salário - percentual do imposto mediante a faixa salarial + adicional dos benefícios

//          Para calcular o percentual de imposto seque as aliquitas:
//              De R$ 0.00 a R$ 1100.00 = 5.00%
//              De R$ 1100.01 a R$ 2500.00 = 10.00%
//              Maior que R$ 2500.00 = 15%

//              Exemplo:
//                  Entrada:
//                      2000
//                      250

//                  Saída:
//                      2050.00

const {gets, print} = require('./funcoes-auxiliares.js');

const salarioBruto = gets();
const beneficiosAdicionais = gets();

function calcularPercentual(valor, percentual){
    return valor *(percentual / 100);
}

function pegarAliquota (salario){
    
    if(salario >= 0 && salario <= 1100){
        return 5;
    }  else if(salario >= 1100.01 && salario <=2500){
        return 10;
    } else {
        return 15;
    }
}

const aliquotaImposto =  pegarAliquota(salarioBruto);
const valorImposto = calcularPercentual(salarioBruto, aliquotaImposto);

const valorATransferir  = salarioBruto - valorImposto + beneficiosAdicionais;

print(valorATransferir.toFixed(2));