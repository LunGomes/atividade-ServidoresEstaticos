let buttonDog = document.getElementById("btnDog");
let div = document.getElementById("out");

buttonDog.addEventListener("click", function () {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(json => {
            let dog = Dog.fromRaw(json);
            dog.renderFrom(div);
        });
});