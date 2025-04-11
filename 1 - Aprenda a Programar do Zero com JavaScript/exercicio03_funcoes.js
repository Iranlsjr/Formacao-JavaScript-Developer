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

// Main
/*(function (){
    aplicarDesconto();
    
}) ();*/

let precoPoduto = 100;  
let tipoPagamento = 4;

function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto / 100));
}
function aplicarAcrecimo(valor, acrecimo){
    return valor + (valor * (acrecimo /100))
}

if(tipoPagamento === 1){
    console.log('Você ganhou desconto de 10% e pagará: R$' + aplicarDesconto(precoPoduto, 10).toFixed(2) + ' reais.');
} else if (tipoPagamento === 2){
    console.log('Você ganhou desconto de 15% e pagará: R$' + aplicarDesconto(precoPoduto, 15).toFixed(2) + ' reais.');
}else if (tipoPagamento === 3){
    console.log('Você não ganhou desconto nesta compra e pagará:R$' + precoPoduto.toFixed(2) + ' reais.');
}else if (tipoPagamento === 4){
    console.log('Você não ganhou desconto nesta compra e teve um acrécimo de 10% e pagará: R$' +aplicarAcrecimo(precoPoduto, 15).toFixed(2)  + ' reais.');
}else  { 
    console.log('Operação inválida, Tente novamente!');
}


