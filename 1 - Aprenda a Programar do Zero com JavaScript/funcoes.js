
function quadrado(valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

function incremenoJuros(valor, percentualJuros){
    const valorAcrecimo = (percentualJuros /100) * valor;
    return valor + valorAcrecimo;
}

console.log(incremenoJuros(100, 20));