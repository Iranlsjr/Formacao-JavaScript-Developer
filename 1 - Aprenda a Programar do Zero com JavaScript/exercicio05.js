/* 

    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerado o preço normal de etiquetas e a escohla de condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código condição de pagamento:
        - À vista Débito, recebe 10% de desconto;
        - À vista no Dinheiro ou PIX, recebe 15% de desconto;
        - Em duas vezes, preço normal de etiqueta sem juros;
        - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

// 1 = Débito
// 2 = Dinheiro ou PIx
// 3 = Parcelado até 2x
// 4 = Parcelado mais de 2x 

let precoPoduto = 100; 
let tipoPagamento = 0;

const pagamentoDebito =  (precoPoduto - (precoPoduto * 0.1));
const pagamentoDinhePix = (precoPoduto - (precoPoduto * 0.15));
const pagamentoCartao2x = precoPoduto;
const pagamentoCartaoMais2x = (precoPoduto + (precoPoduto * 0.1));

if (tipoPagamento === 1){
    console.log('Você ganhou desconto de 10% e pagará: R$' + pagamentoDebito.toFixed(2));
} else if (tipoPagamento === 2){
    console.log('Você ganhou desconto de 15% e paragá: R$' + pagamentoDinhePix.toFixed(2));
} else if(tipoPagamento === 3){
    console.log('Você não ganhou desconto nesta compra e  pagará: R$' + pagamentoCartao2x.toFixed(2));
}else if(tipoPagamento === 4){
    console.log('Você não ganhou desconto nesta compra e teve um acrécimo de 10% pagará: R$' + pagamentoCartaoMais2x.toFixed(2))
} else {
    console.log(' Operação inválida, tente novamente!');
}


