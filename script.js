

// Troca imagem coração
const coracao = document.querySelectorAll('.coracao');

for (let i = 0; i < coracao.length; i++) {

    coracao[i].addEventListener("click", trocaImagem);

    function trocaImagem(event) {
        event.target.src = "./img/coracao_fav.png";
        
    }

}


// filtro
const carnes = document.querySelectorAll('.carnes');
const peixes = document.querySelectorAll('.peixes');
const doces = document.querySelectorAll('.doces');

const carne = document.querySelector('#carne');
const peixe = document.querySelector("#peixe");
const doce = document.querySelector("#doce");
const todos = document.querySelector("#todos")


for (let i = 0; i < peixes.length; i++) {
    for (let x = 0; x < doces.length; x++) {
        for (let y = 0; y < carnes.length; y++) {
            carne.addEventListener('click', function () {
                peixes[i].classList.add('ativado');
                doces[x].classList.add('ativado');
                carnes[i].classList.remove('ativado');
            })
        }

    }
}

for (let x = 0; x < doces.length; x++) {
    for (let y = 0; y < carnes.length; y++) {
        for (let i = 0; i < peixes.length; i++) {
            peixe.addEventListener('click', function () {
                peixes[i].classList.remove('ativado');
                doces[x].classList.add('ativado');
                carnes[i].classList.add('ativado');
            });
        }
    }
}

for (let i = 0; i < peixes.length; i++) {
    for (let y = 0; y < carnes.length; y++) {
        for (let x = 0; x < doces.length; x++) {
            doce.addEventListener('click', function () {
                peixes[i].classList.add('ativado');
                doces[x].classList.remove('ativado');
                carnes[i].classList.add('ativado');
            })
        }
    }
}

for (let i = 0; i < peixes.length; i++) {
    for (let y = 0; y < carnes.length; y++) {
        for (let x = 0; x < doces.length; x++) {
            todos.addEventListener('click', function () {
                peixes[i].classList.remove('ativado');
                doces[x].classList.remove('ativado');
                carnes[i].classList.remove('ativado');
            })

        }
    }
}
