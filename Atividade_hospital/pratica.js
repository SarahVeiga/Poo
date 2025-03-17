class Funcionario {
    #idade
    constructor(nome, idade) {
        if (this.constructor === Funcionario) {
            throw new Error("Classe não pode ser instanciada diretamente.");
        }

        this.nome = nome;
        this.#idade = idade;
    }
    
 }

 class Medico extends Funcionario{
    

 }

 
 const fernando = new Medico ("Fernando" , 59);
 
 document.getElementById("resultado").innerText = `O médico ${fernando.nome} vai verificar as datas de suas consultas.`


// ----------------------------- Fim dos medicos--------------------------


// ------------------------------Inicio dos Enfermeiros-------------------------


 class Enfermeiro extends Funcionario{

    
 }

 const giselle = new Enfermeiro ("Giselle", 34);
 
 document.getElementById("resultado2").innerText = `Olá, meu nome é ${giselle.nome} e preciso ir para a PS imediatamente! .`


// -------------------------


class Recepcionista extends Funcionario{

    
}

const raissa = new Recepcionista ("Raíssa", 27);

document.getElementById("resultado3").innerText = `A recepsionista ${raissa.nome} encaminhou os documentos para o doutor .`

// ----------------------------

class Cirurgião extends Funcionario{

    
}

const nicolas = new Cirurgião ("Nicolas", 60);

document.getElementById("resultado4").innerText = `O doutor ${nicolas.nome} precisa do exame neurológico do paciente .`


// --------------------

class Zelador extends Funcionario{

    
}

const josé = new Zelador ("José", 19);

document.getElementById("resultado5").innerText = `Respeitem sempre o  ${josé.nome} nosso zelador .`

// -------------------

class Psicologo extends Funcionario{

    
}

const rodrigo = new Psicologo ("Rodrigo" , 87);

document.getElementById("resultado6").innerText = `Sou ${rodrigo.nome} e vim conversar com você para podermos te ajudar! .`


// -----------------


class Doutora extends Funcionario{

    
}

const sophia = new Doutora ("Sophia", 32);

document.getElementById("resultado7").innerText = `A ${sophia.nome} esta responsável pela Cirurgia Ortopédica deste paciente .`


// ------------------























