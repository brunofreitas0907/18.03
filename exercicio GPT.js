/*Exercício: Cadastro de Alunos com Dados Aleatórios
O programa deve:

Criar uma classe chamada Aluno com os atributos: nome, idade e notaFinal.
Gerar automaticamente 5 alunos com nomes, idades e notas aleatórias.
Os nomes devem ser sorteados de um array pré-definido.
A idade deve ser um número aleatório entre 18 e 30 anos.
A nota final deve ser um número aleatório entre 0 e 10.
Armazenar os alunos em um vetor (array).
Exibir a lista completa dos alunos cadastrados.
Calcular e exibir a média das notas da turma.
Exibir apenas os alunos aprovados (notaFinal ≥ 7).*/

class Aluno
{
    constructor(nome, idade, notaFinal)
    {
        this.nome = nome;
        this.idade = idade;
        this.notaFinal = notaFinal;
    }
}

function gerarNomeAleatorio()
{
    var nomes = ["Bruno" , "Jonailton" , "Poloviski" , "João" , "Dani"];
    var sortearNome = Math.floor(Math.random() * nomes.length);
    return (nomes[sortearNome]);
}

function gerarIdadeAleatoria()
{
    var idades = [18 , 20 , 22 , 25 , 29];
    var sortearIdades = Math.floor(Math.random() * idades.length);
    return (idades[sortearIdades]);
}

function gerarNotaAleatoria()
{
    var notas = [5.5 , 6.5 , 7.9 , 8.5 , 9.2];
    var sortearNotas = Math.floor(Math.random() * notas.length);
    return (notas[sortearNotas]);
}

function mediaNotas(somaNotas)
{
    return mediaNotasAlunos = somaNotas / somaNotas.length;
}

var somaNotas = 0;
var mediaNotasAlunos = 0;
var alunosAprovados = [];
var alunosReprovados = [];

console.log(`Alunos Cadastrados:`)

for(let i = 0; i < 5; i++)
{
    var aluno = new Aluno(gerarNomeAleatorio() , gerarIdadeAleatoria() , gerarNotaAleatoria());
    somaNotas += aluno.notaFinal
    console.log(`\n NOME: ${aluno.nome} , IDADE: ${aluno.idade} , NOTA FINAL: ${aluno.notaFinal}`);

    if (aluno.notaFinal >= 7)
    {
        alunosAprovados[i] = aluno
    }
    else
    {
        alunosReprovados[i] = aluno
    }
}

console.log(`\nA média das notas dos alunos é de: ${mediaNotasAlunos}`)


