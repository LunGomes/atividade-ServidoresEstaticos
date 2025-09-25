let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function () {
    // Assíncrona Async Chaining
    fetch('https://jsonplaceholder.typicode.com/posts/101')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                let errorMessage = "Erro: Recurso não encontrado ou servidor não disponível. Tente novamente mais tarde.";
                throw new Error(errorMessage);
            }
        })
        .then(function (json) {
            let post = Post.fromRaw(json);
            post.renderFrom(div);
        })
        .catch(function (error) {
            renderError(error);
            // console.log(error);
        })
});

function renderError(error) {
    div.innerHTML = "";

    let h2 = document.createElement(`h2`);
    h2.textContent = error;

    div.appendChild(h2);
}