/* 

    2) O IMC - Indice de Massa Corporal é um critério da organizaçao Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adulto Condição:
        - Abaixo de 18.5 Abaixo do peso;
        - Entre 18.5 e 25 Peso normal;
        - Entre 25 e 30 Acima do peso;
        - Entre 30 e 40 Abeso;
        - Acima de 40 Obesidade Grave;
*/

function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}


function classificarImc(imc) {
    if (imc < 18.5) {
        return ", então você está abaixo do peso.";
    } else if (imc >= 18.5 && imc <= 25) {
        return " então você está com peso normal.";
    } else if (imc >= 25 && imc <= 30) {
        return " então você está acima do peso.";
    } else if (imc >= 30 && imc <= 40) {
        return " então você está obeso.";
    } else {
        return " então você está com obesidade grave.";
    }
}

function main(){
    let peso = 905;
    let altura = 1.75;
    const imc = calcularImc(peso, altura);
    
    console.log("Seu IMC é de: " + imc.toFixed(2) + classificarImc());
}
main()
