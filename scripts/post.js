class Dog {
    constructor(image, status) {
        this.image = image;
        this.status = status;
    }

    static fromRaw(raw) {
        return new Dog(raw.message, raw.status);
    }

    renderFrom(container) {
        container.innerHTML = "";

        let img = document.createElement("img");
        img.src = this.image;
        img.alt = "Random Dog";
        img.style.maxWidth = "500px";

        container.appendChild(img);
    }
}