/* 
    Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilômetro rodado.
    Crie um método que dado a quantidade de Kilômetros e o preço de combustível nos dê o valor gasto em reais para realizar este percurso.
*/ 

class Carros {
    // Definição
    marca;
    cor;
    gastoMedioCombustivelKm;

    constructor(marca, cor, gastoMedioCombustivelKm){
        this.marca = marca;
        this.cor  = cor;
        this.gastoMedioCombustivelKm = gastoMedioCombustivelKm;
    }
    // Método
    calcularGastoDeViagem (distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoMedioCombustivelKm  * precoCombustivel;
    }

}

const uno = new Carros ('Fiat', 'Prata', 1/12);
const palio = new Carros ('Fiat', 'Preto', 1/10);

console.log(uno.calcularGastoDeViagem(70, 5).toFixed(2) + ' reais.');
console.log(palio.calcularGastoDeViagem(70, 5).toFixed(2) + ' reais.');

