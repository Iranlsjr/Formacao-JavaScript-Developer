// Crie um programa que seja capas de percorrer uma lista de números e imprima cada número par encontrado.

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

// Repetição
for (let i = 0; i < numeros.length; i++) {
    const numerosPar = numeros[i];
    //Condição
    if(numerosPar % 2  ===  0){
        console.log(numerosPar);
    }
    
}