// preciso de uma lista GLOBAL
// criar um array para ser essa lista GLOBAL
var listaProdutos = [];
var tot = [];
var total = 0;

	
	// variaveis dos valores de campos input
	var nome = document.getElementById('nome').value;
	var descricao = document.getElementById('desc').value;
	var qtd =document.getElementById('qtd').value;
	var valor = document.getElementById('valor').value;

// função para adicionar os arrays
function add() {


	// calculo do subtotal
	while(valor.indexOf(',') != -1)
	valor = valor.replace(',','.');
	var subtotal = parseFloat(qtd*valor).toFixed(2);   

	document.getElementById('subtotal').innerHTML = 'R$ ' + subtotal;
	
	// condição para cadastrar/inserir os valores dentro do array
	if(nome !== '' && desc !== '' && qtd !== '' && valor !== '' && subtotal){
	// condição verdadeira
	
		// criar um array LOCAL
		var produtos = [];		

		// adiciona elementos ao final de um array e retorna um novo comprimento deste array.
		produtos.push(nome);
		produtos.push(descricao);
		produtos.push(qtd);
		produtos.push(valor);
		produtos.push(subtotal);
		tot.push(subtotal);

		// limpa as msg de erro
		document.getElementById('msg_erro_nome').innerHTML = '';
		document.getElementById('msg_erro_desc').innerHTML = '';
		document.getElementById('msg_erro_qtd').innerHTML = '';
		document.getElementById('msg_erro_valor').innerHTML = '';
		document.getElementById('erro_num_qtd').innerHTML = '';

		// aparecer mensagem caso o cadastro seja realizado com sucesso
		alert("Cadastro realizado com sucesso!");

		// depois de inserido os dados no array produtos
		// inserir o produtos dentro da LISTAProdutos
		listaProdutos.push(produtos);
		// chamando a função list para sempre atualizar juntos
		list();

	} else{

		if (nome == '' ){
		// condição falsa

		// validando os campos caso não possuem dados ou campos que sejam numéricos
		
			var erro_nome = document.getElementById('msg_erro_nome');
			console.log('Sem o campo nome');

			erro_nome.innerHTML = 'Por favor, preencha o campo nome!';
			
		} else{ document.getElementById('msg_erro_nome').innerHTML = ''; }

		if (descricao == ''){

			var erro_descricao = document.getElementById('msg_erro_desc');
			console.log('Sem o campo descricao');

			erro_descricao.innerHTML = 'Por favor, preencha o campo descrição!';
			
		} else{ document.getElementById('msg_erro_desc').innerHTML = ''; }

		if (qtd == ''){

			var erro_qtd = document.getElementById('msg_erro_qtd');
			console.log('Sem o campo qtd');

			erro_qtd.innerHTML = 'Por favor, preencha o campo qtd';

		} else if (isNaN(qtd)) {
			document.getElementById('erro_num_qtd').innerHTML =
				'Digite um valor!';
		} else{ document.getElementById('msg_erro_qtd').innerHTML = ''; document.getElementById('erro_num_qtd').innerHTML = '';}


		if (valor == ''){

			var erro_valor = document.getElementById('msg_erro_valor');
			console.log('Sem o campo valor');

			erro_valor.innerHTML = 'Por favor, preencha o campo valor!';
			total = 0;
		} else{ document.getElementById('msg_erro_valor').innerHTML = ''; }

	}
	remover();
} // função add ()


function list() { 

	// variavel listaHTML irá listar os dados dentro do documento html em tabela
	var listaHMTL = '<table class="table"><thead>';
	listaHMTL += '<tr><th scope="col">ID</th>';
	listaHMTL += ' <th scope="col">NOME PRODUTO</th>';
	listaHMTL += ' <th scope="col">DESCRIÇÃO</th>';
	listaHMTL += '<th scope="col">QTD</th>';
	listaHMTL += '<th scope="col">VALOR</th>';
	listaHMTL += '<th scope="col">SUBTOTAL</th></tr>';
	listaHMTL += ' </thead>';

	//listar os produtos cadastrados
	for (ii = 0; ii < listaProdutos.length; ii++) {
		console.log(listaProdutos[ii]);
	}

	// listar e somar os subtotais de todos os produtos cadastrados
	for (t = 0; t < tot.length; t++) {
		console.log(tot[t]);
	
		let soma = 0;

		for (let i=0; i<tot.length;i++){
			soma += +tot[i];
			total =  'Total: R$ ' + parseFloat(soma).toFixed(2) ;
			console.log(soma);
		}

	}

	for (var row = 0; row < listaProdutos.length; row++) {

		var id = 1 + row;
		var celula = '';
		
		for (var col = 0; col < listaProdutos[row].length; col++) {
			celula += listaProdutos[row][col]  + ' - ' ;		
		}

		listaHMTL += '<tbody><th scope="row">' + id + '<td>' + listaProdutos[row][0] + '</td>' + '<td>' + listaProdutos[row][1] + '</td>' + '<td>' + listaProdutos[row][2] + '</td>' + '<td>' + listaProdutos[row][3] + '</td>' + '<td>' + listaProdutos[row][4] + '</td> </th> </tbody>';
		
	}

	// listar o total de todos os subtotais dentro da div com o id = "tot"

		listaHMTL += ' </table>  <div class="callout"><span class="tit_ok1" id="total">' + total + '</span></div> <br>';
		document.getElementById('mostrar').innerHTML = listaHMTL;
	remover();
} // função list()


function remove() {

	// remove o último elemento de uma matriz e retorna aquele elemento.
	listaProdutos.pop();
	tot.pop();
	document.getElementById('subtotal').innerHTML = 'R$ 0.00';
	total = 'R$ 0.00';
	list();

}

function limpar() {

	// apaga todos os dados cadastrados
	listaProdutos = [];
	listaHMTL = '';
	tot = [];

	//retira os dados listados da div "mostrar" e "tot"
	document.getElementById('mostrar').innerHTML = listaHMTL;
	document.getElementById('subtotal').innerHTML = '';
	document.getElementById('total').innerHTML = '';

	list();

}
