const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
]

const maioresDeIdade = usuarios.filter(pessoa => pessoa.idade >= 18 && pessoa.idade <= 65);
const habilitados = maioresDeIdade.every(pessoa => pessoa.habilitado)

console.log(`${habilitados ? "Todos passaram no teste" : "todos precisa estar habilitados"}`);