
// Main
(function(){
    escrevaMeuNome();
    isMaiorDeIdade(18);
})();

// Escrever Nome
function escrevaMeuNome(nome){
    return nome;
}

// Verificar se é Maior de idade
function isMaiorDeIdade(idade){
    if(idade >= 18){
        console.log(escrevaMeuNome('Iran') + ' Você tem, ' + idade + ' anos, então você é maior de idade!');
    }else{
        console.log(escrevaMeuNome() +'Você tem, ' + idade + ' anos, então você menor de idade!');
    }
}