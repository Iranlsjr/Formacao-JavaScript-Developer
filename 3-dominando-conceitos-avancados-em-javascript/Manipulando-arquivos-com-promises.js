const fs = require("fs");
const { url } = require("inspector");

const promesaDaLeituraDoArquivo = fs.promises.readFile("3-dominando-conceitos-avancados-em-javascript/tarefas.csv");

promesaDaLeituraDoArquivo.then((arquivo) => {
  console.log(arquivo.toString("utf8"));
}).catch((error)=>{
    console.log(error)
})
