const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];


function valida_array(elemento) {
	
	return elemento ? "existe palavra inválida" : "array válido";
}

const existe = palavras.some(x => x.length > 5);

console.log(valida_array(existe));
