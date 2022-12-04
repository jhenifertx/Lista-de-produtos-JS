$(".real").maskMoney({
	thousands:'.', 
	decimal:','
})
const format = { 
	minimumFractionDigits: 2, 
	style: 'currency', 
	currency: 'BRL' 
}

/****** Cálculos Google Adwords ******/
function googleAdwords() {
	let valor = parseFloat($('#valor').val())
    let qtd = parseFloat($('#qtd').val())
}

$(document).on('keyup', '#valor', googleAdwords)
$(document).on('keyup', '#total', googleAdwords)