function mostra() {
  resultado.style.color = "#495057";
  if (cod != "") {
    inicio.style.display = "none";
    resultado.innerHTML = cod;
    final.style.display = "inline-block";
    cod = "";
  } else {
    inicio.style.display = "inline-block";
    final.style.display = "none";
  }
}

function alerta() {
  var alerta = document.querySelector(".alerta");
  mostra();

  var vermelho = setInterval(function () {
    alerta.style.color = "red";
  }, 150);

  var preto = setInterval(function () {
    alerta.style.color = "black";
  }, 300);

  setTimeout(function () {
    clearInterval(vermelho);
    clearInterval(preto);
    alerta.style.color = "#495057";
  }, 1500);
}

function criptografa() {
  msg = mensagem.value;
  if (
    msg ==
    msg
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
  ) {
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
  } else {
    alerta();
  }
}

function descriptografa() {
  msg = mensagem.value;
  if (
    msg ==
    msg
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
  ) {
    cod = msg.replace(/ai/g, "a");
    cod = cod.replace(/enter/g, "e");
    cod = cod.replace(/imes/g, "i");
    cod = cod.replace(/ober/g, "o");
    cod = cod.replace(/ufat/g, "u");
    mostra();
  } else {
    alerta();
  }
}

function copia() {
  let texto = resultado.innerText;
  navigator.clipboard.writeText(texto);
  resultado.style.color = "#9ea1ca";
}

cod = "";
var mensagem = document.querySelector("textarea");
var resultado = document.querySelector(".resultado");

var cripto = document.querySelector(".cripto");
cripto.onclick = criptografa;
var descripto = document.querySelector(".descripto");
descripto.onclick = descriptografa;

var inicio = document.querySelector(".semMensagem");
var final = document.querySelector(".comMensagem");
final.style.display = "none";

var copiar = document.querySelector(".copiar");
copiar.onclick = copia;
