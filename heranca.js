// Criar classe pessoa
// Com parametro Nome e Idade
// Criar método para apresentar
// Olá, sou nome e tenho idade anos.


// Classe base
class Pessoa{
    constructor(nome, idade) {
        // O constructor é um método tradicional
        this.nome = nome;
        this.idade = idade;
    }

        apresentar = () => console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`);
        // apresentar = () => console.log(`Olá, meu nome é ${this.nome} e estou ${this.elogiar} a Sarah`);
   }


   class Aluno extends Pessoa{
    estudar = () => console.log(`${this.nome} está estudando`);

   }
   class Professor extends Pessoa{
    ensinar = () => console.log(`Professor ${this.nome} está ensinando.`)
    elogiar = () => console.log(`Professora ${this.nome} está elogiando.`)

   }

//    Criando objetos
   const sarah = new Aluno ("Sarah" , 17);
   const Raul = new Professor("Raul" , 28);
   const Nadja = new Professor ("Nadja" , 30);
   

   sarah.apresentar();
   Raul.apresentar();
   sarah.estudar();
   Raul.ensinar();
   Nadja.elogiar();