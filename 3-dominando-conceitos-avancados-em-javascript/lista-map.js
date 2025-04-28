class Pessoa {
  constructor(nome) {
    this.name = nome;
  }
}
const lista = [new Pessoa("Iran"), new Pessoa("Luan"), new Pessoa("Osvaldo")];

const listaNomesHTML = lista.map((element) => {
    return `
    <li>
    ${element.name}
    </li>
    `
});

console.log(listaNomesHTML);
