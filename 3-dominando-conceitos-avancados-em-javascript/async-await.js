const fs = require("fs");

const promesaDaLeituraDoArquivo = fs.promises.readFile(
  "3-dominando-conceitos-avancados-em-javascript/tarefas.csv"
);

async function buscarArquivo() {
  const arquivo = await promesaDaLeituraDoArquivo;
  const textoArquivo = arquivo.toString("utf8");
  console.log(textoArquivo);
}
buscarArquivo();
