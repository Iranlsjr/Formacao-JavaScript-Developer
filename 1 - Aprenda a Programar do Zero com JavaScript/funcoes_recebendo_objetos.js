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


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if (p2.nome > p1.nome){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome}e ${p2.nome} tem a mesma idade.`)
    }
}

const iran = new Pessoa('Iran', 32);
const luan = new Pessoa('Luan', 33);

compararPessoas(iran, luan);