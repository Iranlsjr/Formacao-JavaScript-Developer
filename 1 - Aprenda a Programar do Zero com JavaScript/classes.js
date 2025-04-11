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
    
    descrever (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


//Instancia 
const iran = new Pessoa ();
iran.nome = 'Iran Lourenço';
iran.idade = 32;

const jose = new Pessoa ();
jose.nome = 'José Lourenço';
jose.idade = 23;

console.log(iran);
console.log(jose);
