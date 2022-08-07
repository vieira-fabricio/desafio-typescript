/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let funcinario = {};
employee.codigo = 10;
employee.nome = "John";
*/

// Resposta 1
let funcinario = {
    codigo: 10,
    nome: 'John'
}

//resṕosta 2
let funcinario2: (codigo: number, nome: String) => {
    codigo: 10,
    nome: 'John'
}

// Resposta 3
interface Ifuncionario {
    codigo: number,
    nome: string
}

let funcinario3: Ifuncionario = {
    codigo: 10,
    nome: 'John'
}



