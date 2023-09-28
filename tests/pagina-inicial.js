const renderiza = async () => {
  // Conexao com api
  const api = await fetch('db.json');
  if(!api.ok){
    throw new Error ('erro com banco de dados');
  }
  const dados = await api.json();

  // Obtendo ids das sections para renderizar itens por seções conforme a api
  const secoes = document.querySelectorAll('.section-produtos');
  secoes.forEach((secao)=>{
    const secaoId = secao.id;

    const produtosPorSecao = dados.produto.filter((produto)=>{
      return produto.section === secaoId;
    });
  
  // Renderizando os itens
    const listaParaRenderizar = secao.querySelector('.produtos');
    produtosPorSecao.forEach((produto)=>{
      const card = document.createElement('li');
            card.innerHTML = `
              <div class='produto'>    
                <img src="../${produto.imageUrl}" alt="${produto.alt}" class="imagem-produto">
                <span class="produto-nome">${produto.name}</span>
                <span class="span-bold">${produto.price}</span>
                <a href="products.html?id=${produto.id}" class="ver-produto" data-product-id="${produto.id}">Ver produto</a>
              </div>
            `;
      listaParaRenderizar.appendChild(card);
    })
  })
}

renderiza()