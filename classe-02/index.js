const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const stringMaisLongo = cidades.reduce((acc, cidade) => acc.length > cidade.length ? acc : cidade);
console.log(stringMaisLongo);