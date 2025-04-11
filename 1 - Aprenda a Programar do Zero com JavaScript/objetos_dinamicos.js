

const iran = {
    nome: 'Iran Lourenço',
    idade: 32,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} `);
    }
};

// Acessando dinamicamente
const atributo = 'idade';

// Reatribuindo valores
iran['idade'] = 35

console.log(iran[atributo]);

