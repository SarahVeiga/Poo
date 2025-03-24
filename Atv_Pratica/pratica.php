<?php

class Pessoas {
    public $nome;
    public $idade;
    private $estcivil;

    public function __construct($nome, $idade, $estcivil) {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->estcivil = $estcivil;
    }

    public function verestCivil() {
        return $this->estcivil;
    }
}

class Aluno extends Pessoas {
    public function estudar() {
        echo "Sou a aluna {$this->nome}, tenho {$this->idade} anos de idade e estudo no Senai </br>";
    }
}

class Professor extends Pessoas {
    public function ensinar() {
        echo "Sou o professor {$this->nome}, tenho {$this->idade} anos de idade sou um dos melhores professores do Senai! </br>";
    }
}


// Criando o objeto Aluno e passando o valor de estcivil
$sarah = new Aluno("Sarah", 15, "sla");
$livia = new Aluno("Livia", 17, "sla");
$raul = new Professor("Raul", 34, "sla");
$nadja = new Professor("Nadja", 25, "sla");

echo $raul->ensinar();
echo $raul->verestCivil();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista dos Alunos e Professores</title>
</head>
<body>
</body>
</html>