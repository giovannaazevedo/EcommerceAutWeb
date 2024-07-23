class ProdutoComponente extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const titulo = this.getAttribute('titulo');
        const preco = this.getAttribute('preco');
        const imgSrc = this.getAttribute('imgSrc');
        const link = this.getAttribute('link');
        const isOferta = this.hasAttribute('isOferta');

        const div = document.createElement("div");
        div.className = ` ${isOferta ? 'best' : 'lanc'}`;
        div.innerHTML = `

            <div class="destaques-img position-relative">
                <a href="${link}"><img src="${imgSrc}" alt="${titulo}" class="w-100"></a>
                ${isOferta ? '<span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">Oferta</span>' : ''}
            </div>
            <div class="text-center">
                <div class="rating mt-3">
                    <span class="text-primary"><i class="bi bi-star-fill"></i></span>
                    <span class="text-primary"><i class="bi bi-star-fill"></i></span>
                    <span class="text-primary"><i class="bi bi-star-fill"></i></span>
                    <span class="text-primary"><i class="bi bi-star-fill"></i></span>
                    <span class="text-primary"><i class="bi bi-star-fill"></i></span>
                </div>
                <p class="my-1">${titulo}</p>
                <span class="fw-bold">R$ ${preco}</span>
                <a href="carrinho.html" class="btn btn-primary mt-3">Adicionar ao carrinho</a>
            </div>
        `;
        this.appendChild(div);
    }
}

customElements.define("produto-componente", ProdutoComponente);






