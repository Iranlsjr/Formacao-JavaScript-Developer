// Objeto -  Instancia é Ocorrência
/*const iran = {
    nome: 'Iran Lourenço',
    idade: 32,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};*/


// Classe - Definição
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;

    }
    
    descrever (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


//Instancia 
const iran = new Pessoa ('Iran', 33);
const jose = new Pessoa ();


iran.descrever();
console.log(iran);

