const api = 'https://651067693ce5d181df5d387c.mockapi.io/api/v1/produtos';
const mockapi = 'http://localhost:3000/produto';
const listaProdutos = async () => {
    const con = await fetch(api);
    const res = await con.json();
    return res;
}

const mainProduto = async () => {
    const mainProdutoElemento = document.querySelector(".produto-especifico");
    mainProdutoElemento.innerHTML = `
    <div class="todos-produtos">
        <div class="titulo titulo-espaço">
            <h3>Todos os produtos</h3>
            <a href="add-products.html">Adicionar produto</a>
        </div>
        <ul class="lista-todos-produtos"></ul>
    </div>
    `;
    const listaParaRenderizar = document.querySelector('.lista-todos-produtos');
    const produtos = await listaProdutos();

    produtos.forEach((produto) => {
        const card = document.createElement ('li');
        card.innerHTML = `
        <div class='produto'>    
          <img src="${produto.imageUrl}" alt="${produto.alt}" class="imagem-produto">
          <span class="produto-nome">${produto.name}</span>
          <span class="span-bold">${produto.price}</span>
          <a href="products.html?id=${produto.id}" class="ver-produto" data-product-id="${produto.id}">Ver produto</a>
        </div>
      `;
      listaParaRenderizar.appendChild(card);
        
    });
}


window.addEventListener('load', mainProduto)
