let total;
limpar();

function adicionar () {
    // recuperar valores nome, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomedoProduto = produto.split('-')[0];
    let valorProdouto = parseFloat(produto.split('R$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Validação do produto e quantidade
    if (!nomedoProduto || isNaN(valorProdouto) || valorProdouto <= 0) {
        alert('Erro: Selecione um produto válido.');
        return
    }
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Erro: Insita uma quantidade válida (número inteior maior que zero).');
        return;
    }
    // calcular o preço, o nosso subtotal x a quantidade
    let preco = quantidade * valorProdouto;

    // adicionar no carrinho
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}</span> ${nomedoProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    // atualizar o valor total
    total = total + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${total}`
    document.getElementById('quantidade').value = 0;
}

function limpar () {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0'

}