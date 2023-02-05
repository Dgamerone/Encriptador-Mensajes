// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar() {
  var text = document.getElementById("text-input").value.toLowerCase();
  // i es para que afecte mayusculas y minusculas.
  // g es para que afecte la linea u oración.
  // m es par aque afecte multiples lineas o parrafos
  var textEncryption = text.replace(/e/gim, "enter");
  var textEncryption = textEncryption.replace(/i/gim, "imes");
  var textEncryption = textEncryption.replace(/a/gim, "ai");
  var textEncryption = textEncryption.replace(/o/gim, "ober");
  var textEncryption = textEncryption.replace(/u/gim, "ufat");

  document.getElementById("img-right").style.display = "none";
  document.getElementById("right-text").style.display = "none";
  document.getElementById("right-text-2").innerHTML = textEncryption;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
  var text = document.getElementById("text-input").value.toLowerCase();
  // i es para que afecte mayusculas y minusculas.
  // g es para que afecte la linea u oración.
  // m es par aque afecte multiples lineas o parrafos
  var textEncryption = text.replace(/enter/gim, "e");
  var textEncryption = textEncryption.replace(/imes/gim, "i");
  var textEncryption = textEncryption.replace(/ai/gim, "a");
  var textEncryption = textEncryption.replace(/ober/gim, "o");
  var textEncryption = textEncryption.replace(/ufat/gim, "u");

  document.getElementById("img-right").style.display = "none";
  document.getElementById("right-text").style.display = "none";
  document.getElementById("right-text-2").innerHTML = textEncryption;
  document.getElementById("copy").style.display = "show";
  document.getElementById("copy").style.display = "inherit";
}

function copiar(params) {
  var contenido = document.querySelector("#right-text-2");
  contenido.select();
  document.execCommand("copy");
  alert("¡Copiado!");
}
