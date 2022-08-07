/* Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/
 

//Resposta 1
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
}

//Resposta 2
let pessoa2: (nome: string, idade: number, profissao: string) => {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
}

//resposta 3
interface Ipessoa {
    nome: string,
    idade: number,
    profissao: string
}

let pessoa3: Ipessoa = {
    nome: 'laura',
    idade: 32,
    profissao: 'Atriz'
};

let pessoa4: Ipessoa = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}