<?php
abstract class Pessoa{
    public $nome;

    public function __construct($nome){
        $this->nome=$nome;
    }
}

class Aluno extends Pessoa{
}
$sarah = new Aluno ("Sarah");
echo $sarah->nome . " É ele";

?>