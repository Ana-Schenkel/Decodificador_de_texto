function mostra() {
  if (cod != "") {
    inicio.style.display = "none";
    document.querySelector(".resultado").innerHTML = cod;
    final.style.display = "inline-block";
    cod = "";
  } else {
    inicio.style.display = "inline-block";
    final.style.display = "none";
  }
}

function criptografa() {
  msg = mensagem.value;
  for (i in msg) {
    if (msg[i] == "a") {
      cod = cod + "ai";
    } else if (msg[i] == "e") {
      cod = cod + "enter";
    } else if (msg[i] == "i") {
      cod = cod + "imes";
    } else if (msg[i] == "o") {
      cod = cod + "ober";
    } else if (msg[i] == "u") {
      cod = cod + "ufat";
    } else {
      cod = cod + msg[i];
    }
  }
  mostra();
}

cod = "";
var mensagem = document.querySelector("textarea");
var cripto = document.querySelector(".cripto");
cripto.onclick = criptografa;
var inicio = document.querySelector(".semMensagem");
var final = document.querySelector(".comMensagem");
final.style.display = "none";
var copiar = document.querySelector(".copiar");
