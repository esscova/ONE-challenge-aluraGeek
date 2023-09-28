const api = 'https://651067693ce5d181df5d387c.mockapi.io/api/v1/produtos';
const mockapi = 'http://localhost:3000/produto';
const adicionarProdutos = () => {
    const form = document.querySelector('[data-form]')
    const btnAddProdutos = document.querySelector('[data-add]');
    btnAddProdutos.addEventListener('click', async (evento) => {
        evento.preventDefault();
        const url = document.querySelector('.input-url-add').value;
        const categoria = document.querySelector('.select-categoria-add').value;
        const nome = document.querySelector('.input-nome-add').value;
        const preco = document.querySelector('.input-preco-add').value;
        const descricao = document.querySelector('.input-descricao-add').value;

        const novoProduto = {
            imageUrl: url,
            section: categoria,
            name: nome,
            price: preco,
            description: descricao,
        };

        const res = await fetch(api, {
            method: 'POST',
            headers: {
                'content-Type':'application/json',
            },
            body: JSON.stringify(novoProduto),
        });
        if(res.ok){
            alert('Produto adicionado com sucesso!');
            form.reset();
            window.location.href = "products.html";
        }else{
            alert('Erro ao adicionar produto. Tente novamente.');
        }       
    });
    console.log('oi')
}


document.addEventListener('DOMContentLoaded', adicionarProdutos)