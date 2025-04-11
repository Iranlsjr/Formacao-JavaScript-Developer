/*
    Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso  altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso / (altura * altura));
     Instancie uma pessoa chamada José que tenha 70 kg de peso 1.75 e peça ao José para dizer o valor do seu IMC.
*/


// Classe
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome  = nome;
        this.peso = peso;
        this.altura = altura;
    }
    // Método
    calcularIMC (){
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc (){
        const imc = this.calcularIMC();

        if(imc < 18.5){
            return(this.nome + ', o seu IMC é de: ' + imc.toFixed(2) + ' então você está abaixo do peso.')
        }else if((imc >= 18.5) && (imc <= 25)){
            return(this.nome + ', o seu IMC é de: ' + imc.toFixed(2) + ' então você está com peso normal.')
        } else if((imc >= 25) && (imc  <= 30)){
            return(this.nome +', o seu IMC é de: ' + imc.toFixed(2) + ' então você está acima do peso.')
        }  else if((imc >=30) && (imc <=40)){
            return(this.nome + ', o seu IMC é de: ' + imc.toFixed(2) + ' então você está obeso.')
        }else{
            return(this.nome + ', o seu IMC é de: ' + imc.toFixed(2) + ' então você está com obesidade grave.')
        }
    }
}

const jose = new Pessoa('José', 70, 1.75)
console.log(jose.classificarImc());