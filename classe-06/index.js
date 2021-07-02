const numeros = [0, 122, 4, 6, 7, 8, 44];

function valida_array_dePares(ehValido) {
	return ehValido ? "array válido" : "array inválido";
}

const ehValido = numeros.every(x => x % 2 === 0);

console.log(valida_array_dePares(ehValido));