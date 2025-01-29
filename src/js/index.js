//passo1
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;
//passo2
btnAvancar.addEventListener("click", function () {


    if (cartaoAtual == cartoes.length - 1) return;
    

    //passo4
    esconderCartaoSelecionado();

    //passo3
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

//obg 2



btnVoltar.addEventListener("click", function () {




    if (cartaoAtual === 0) return;


    //passo4
    esconderCartaoSelecionado();

    //passo3
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

