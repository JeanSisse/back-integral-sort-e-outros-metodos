const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

// a)
const orendemCrescente = numeros.slice();
orendemCrescente.sort((a, b) => a < b ? -1 : 1);

console.log(orendemCrescente);

// b)
const ordemDec = numeros.slice();
ordemDec.sort((a, b) => a > b ? -1 : 1);
console.log(ordemDec);

// c)
const ordemCodUnicode = numeros.slice();
ordemCodUnicode.sort();
console.log(ordemCodUnicode);

// d)
const frutasOrdCrescente = frutas.slice()
frutasOrdCrescente.sort((a, b) => a.localeCompare(b));
console.log(frutasOrdCrescente);

// e)
const frutasOrdDec = frutas.slice();
frutasOrdDec.sort((a, b) => b.localeCompare(a));
console.log(frutasOrdDec);

// f)
const ordenaPorMenorComprimento = frutas.slice();
ordenaPorMenorComprimento.sort((a, b) => a.length < b.length ? -1 : 1);
console.log(ordenaPorMenorComprimento);