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