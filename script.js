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

function alerta() {
  var alerta = document.querySelector(".alerta");
  alerta.style.color = "red";
  //setInterval(100000);
  //alerta.style.color = "#495057";
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
  let texto = document.querySelector(".resultado").innerText;
  navigator.clipboard.writeText(texto);
  alert("Copied the text: " + texto);
}

cod = "";
var mensagem = document.querySelector("textarea");

var cripto = document.querySelector(".cripto");
cripto.onclick = criptografa;
var descripto = document.querySelector(".descripto");
descripto.onclick = descriptografa;

var inicio = document.querySelector(".semMensagem");
var final = document.querySelector(".comMensagem");
final.style.display = "none";

var copiar = document.querySelector(".copiar");
copiar.onclick = copia;
