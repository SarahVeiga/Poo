// // Criando a classe Aluno
// class Aluno {
//     #nota
//     constructor(nome, idade, nota) {
//         // O constructor é um método tradicional
//         this.nome = nome;
//         this.idade = idade;
//         this.#nota = nota;
//     }

//         estudar = () => console.log(`${this.nome} está estudando.`);

//         verNota = () => this.#nota
//    }

//    const sarah = new Aluno("Sarah" ,17, 100)

// //    console.log(sarah.nome)
// //    sarah.estudar()
// //    console.log(sarah.idade);
// //    console.log(sarah.verNota());

// sarah.estudar()
//    console.log(sarah.nome,sarah.idade, sarah.verNota())





// Herança

class Pessoa {
    constructor(nome, idade) {
        // O constructor é um método tradicional
        this.nome = nome;
        this.idade = idade;
    }

        estudar = () => console.log(`${this.nome} está estudando.`);

   }

   const sarah = new Pessoa("Sarah" ,17)


sarah.estudar()
   console.log(sarah.nome,sarah.idade)