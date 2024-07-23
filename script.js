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
        div.className = `col-md-6 col-lg-4 col-xl-3 p-3 ${isOferta ? 'best' : 'lanc'}`;
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


class ProdutoEspecialComponente extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const titulo = this.getAttribute('titulo');
        const preco = this.getAttribute('preco');
        const imgSrc = this.getAttribute('imgSrc');
        const link = this.getAttribute('link');
        const isEspecial = this.hasAttribute('isEspecial');

        const div = document.createElement("div");
        div.className = 'col-md-6 col-lg-4 col-xl-3 p-3';
        div.innerHTML = `
            <div class="prevenda-img position-relative overflow-hidden">
                <a href="${link}"><img src="${imgSrc}" alt="${titulo}" class="w-100"></a>
                ${isEspecial ? '<span class="position-absolute d-flex align-items-center justify-content-center text-primary fs-4"><i class="bi bi-suit-heart-fill" style="color: rgb(134, 87, 223);"></i></span>' : ''}
            </div>
            <div class="text-center">
                <p class="mt-3 mb-1">${titulo}</p>
                <span class="fw-bold d-block">R$ ${preco}</span>
                <a href="carrinho.html" class="btn btn-primary mt-3">Adicionar ao carrinho</a>
            </div>
        `;
        this.appendChild(div);
    }
}

customElements.define("produtoespecial-componente", ProdutoEspecialComponente);


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


