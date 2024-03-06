function adicionar() {
   //1ª Recuperar os valores (nome do produto, quantidade e valor)
   let produto = document.getElementById('produto').value;
   let nomeProduto = produto.split('-')[0]; 
   let valorUnitario = produto.split('R$')[1];
   let quantidade  = document.getElementById('quantidade');
   
   alert(nomeProduto);
   alert(valorUnitario);
   alert(quantidade.value);
   //Calcular o preço(subtotal)
   let preco = quantidade.value * valorUnitario;
   alert(preco);    
   //Adicionar no carrinho
   //Atualizar o valor total
}

function limpar() {
    
}