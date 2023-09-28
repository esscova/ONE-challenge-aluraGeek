const api = 'https://651067693ce5d181df5d387c.mockapi.io/api/v1/produtos';

const renderiza = async () => {
  try {
    // Conexão com a API
    const resposta = await fetch(api);
    if (!resposta.ok) {
      throw new Error('Erro com banco de dados');
    }
    const dados = await resposta.json();
    
    // Iterar sobre as seções do HTML
    const secoes = document.querySelectorAll('.section-produtos');
    secoes.forEach((secao) => {
      const secaoId = secao.id;
  
      // Filtrar produtos com base na seção
      const produtosPorSecao = dados.filter((produto) => produto.section === secaoId);
  
      // Encontrar a lista de produtos na seção atual
      const listaParaRenderizar = secao.querySelector('.produtos');
  
      // Renderizar os produtos
      produtosPorSecao.forEach((produto) => {
        const card = document.createElement('li');
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
    });
  } catch (erro) {
    console.error(erro);
  }
};

renderiza();
