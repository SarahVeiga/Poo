// Permite criar classe que não podem ser instanciadas diretamente
// Servindo apenas como modelo base por outras classes
// Evitando criação de objetos genéricos

class Pessoa {
    constructor(nome) {
        if (this.constructor === Pessoa) {
            throw new Error("Não é correto criar outra Pessoa!")
        }

        this.nome = nome;
    }
}
class Aluno extends Pessoa{

}

const gabi = new Aluno ("Gabi")

console.log(gabi.nome);

// EXPLICAÇÃO

// A classe Pessoa não pode ser instanciada diretamente
// O If no Constructor impede que objetos iguais sejam criados
// O Aluno herda de pessoa, então pode ser instanciado normalmente
// Isso garante que a Pessoa funcione como modelo para outras classes



