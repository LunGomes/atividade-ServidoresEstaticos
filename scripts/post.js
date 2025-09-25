// Data Model (Modelo de Dados)
class Post {
    constructor(fact, length) {
        this.fact = fact;
        this.length = length;
    }

    static fromRaw(raw) {
        return new Post(raw.fact, raw.length);
    }

    renderFrom(container) {
        container.innerHTML = "";

        let h2 = document.createElement(`h2`);
        h2.textContent = `Fato sobre um gatinho: ${this.fact}`;

        let pBody = document.createElement(`p`);
        pBody.textContent = `Comprimento do fato sobre um gatinho: ${this.length}`;

        container.appendChild(h2);
        container.appendChild(pBody);
    }

}