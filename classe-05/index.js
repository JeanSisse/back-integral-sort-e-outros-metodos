const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

function valida_compras(argument) {
	if (argument)
		return "Revise sua lista, Joõa. Possui bebida com venda proibida!";
	else
		return "Tudo certo, vamos as compras!";
}

const validaListaDeCompra = palavras.some(a => 
	(a === "cerveja" || a === "vodka"));


console.log(valida_compras(validaListaDeCompra));