

const iran = {
    nome: 'Iran Lourenço',
    idade: 32,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} `);
    }
};

iran.altura = 1.72;

delete iran.nome;

console.log('Eu me chamo ' + iran.nome + ' e tenho ' + iran.idade +  ' anos de idade.');
iran.descrever();
