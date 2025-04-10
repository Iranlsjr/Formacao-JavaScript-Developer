/*
    1) Faça um algoritmo que dado as 3 notas tiraas por um aluno em um semestre da faculdade, calcule e imprima a sua média e asua classuficação conforme a tabela abaixo.

    Média = (nota  1 + nota 2 + nota 3) / 3;

    Classificação:
        - Média menor que 5, reprovação;
        - Média entre 5 e 7, recupeção;
        - Média acima de 7, aprovado;
*/

let nota1 = 7;
let nota2 = 7;
let nota3 = 7;

const soma = nota1 + nota2 + nota3;
const reusultadoMedia = soma / 3;

if(reusultadoMedia < 5){
    console.log('Sua média é de: ' + reusultadoMedia.toFixed(2) + ' então você está reprovado');
} 
else if((reusultadoMedia >= 5) && (reusultadoMedia <= 7)){
    console.log('Sua média é de: ' + reusultadoMedia.toFixed(2) + ' então você está de recuperação');
}
else {
    console.log('Sua média é de: ' + reusultadoMedia.toFixed(2) + ' então você está aprovado!');

}

