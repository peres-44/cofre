
let senha = Math.floor(Math.random() * 50) + 1;
let tentativas = 0;

function verificar() {

    let numero = Number(document.getElementById("numero").value);
    let mensagem = document.getElementById("mensagem");

    if (numero < 1 || numero > 50 || document.getElementById("numero").value == "") {
        mensagem.innerText = "Digite um número de 1 a 50!";
        return;
    }

    if (tentativas >= 7) {
        return;
    }

    tentativas++;

    document.getElementById("tentativas").innerText =
        "Tentativas: " + tentativas + " de 7";

    if (numero == senha) {

        mensagem.innerText = "Você acertou!";

        document.getElementById("imagem").src = "imagens/cofre aberto.png";

        document.getElementById("resultado").innerText =
            "Você abriu o cofre em " + tentativas + " tentativas.";

        document.getElementById("overview").style.display = "flex";

    } else if (numero < senha) {

        mensagem.innerText = "A senha é maior!";

    } else {

        mensagem.innerText = "A senha é menor!";

    }

    if (tentativas == 5 && numero != senha) {
        mensagem.innerText = "Atenção! Restam apenas 2 tentativas!";
        mensagem.classList.add("alerta");
    }

    if (tentativas == 7 && numero != senha) {
        mensagem.innerText = "Suas tentativas acabaram!";
    }

    document.getElementById("numero").value = "";
}

function reiniciar() {

    senha = Math.floor(Math.random() * 50) + 1;
    tentativas = 0;

    document.getElementById("imagem").src = "cofre-fechado.png";
    document.getElementById("mensagem").innerText = "Boa sorte!";
    document.getElementById("mensagem").classList.remove("alerta");
    document.getElementById("tentativas").innerText = "Tentativas: 0 de 7";
    document.getElementById("numero").value = "";
    document.getElementById("overview").style.display = "none";
}
