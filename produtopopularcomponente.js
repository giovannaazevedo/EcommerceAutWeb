class ProdutoPopularComponente extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const titulo = this.getAttribute('titulo');
        const preco = this.getAttribute('preco');
        const imgSrc = this.getAttribute('imgSrc');
        const link = this.getAttribute('link');

        this.innerHTML = `
            <div class="d-flex align-items-start justify-content-start">
                <img src="${imgSrc}" alt="${titulo}" class="img-fluid pe-3 w-25">
                <div>
                    <p class="mb-0">${titulo}</p>
                    <span>R$ ${preco}</span>
                </div>
            </div>
        `;
    }
}

customElements.define('produtopopular-componente', ProdutoPopularComponente);