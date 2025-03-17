// Criando a classe Aluno
class Aluno{
    constructor(nome, idade) {
        // O constructor é um método tradicional
        this.nome = nome;
        this.idade = idade;
    }

        estudar = () => console.log(`${this.nome} está estudando.`);
   }

   const sarah = new Aluno("Sarah" , 17)

   console.log(sarah.nome)

   sarah.estudar()



// // // Objeto - Nicolly


// class objeto {
//     constructor(nome, idade) {
//         // O constructor é um método tradicional
//         this.nome = nome;
//         this.idade = idade;
//     }

//         estudar = () => console.log(`${this.nome} está estudando.`);
//    }

//    const Nicolly = new objeto("Nicolly" , 16)

//    console.log(Nicolly.nome)
//    Nicolly.estudar()


