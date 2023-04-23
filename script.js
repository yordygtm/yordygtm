
const textoEncriptar = document.querySelector("#textoEn");
const boton = document.querySelector("#encriptar");
const encriptado = document.querySelector("#textoDes");
const botonDesncriptar = document.querySelector("#desencriptar");

function Encriptar() {
  let textoEncriptado = "";
  let cadena = textoEncriptar.value;
  let temporal = "";
  let cadenaLimpio = cadena.toLowerCase();
  let cadenaCaracteres = [];
  for (let x of cadenaLimpio) {
    temporal += x;
    cadenaCaracteres = temporal.split("");
    console.log(cadenaCaracteres);
  }
  for (let i = 0; i <= cadenaCaracteres.length; i++) {
    if (cadenaCaracteres[i] == "a") {
      cadenaCaracteres[i] = "ai";
    } else if (cadenaCaracteres[i] == "e") {
      cadenaCaracteres[i] = "enter";
    } else if (cadenaCaracteres[i] == "i") {
      cadenaCaracteres[i] = "imes";
    } else if (cadenaCaracteres[i] == "o") {
      cadenaCaracteres[i] = "ober";
    } else if (cadenaCaracteres[i] == "u") {
      cadenaCaracteres[i] = "ufat";
    }
    textoEncriptado = cadenaCaracteres.join("");
  }
  encriptado.value = textoEncriptado;
}

function Desencriptar() {
  let cadena = textoEncriptar.value;
  let temporal = "";

  for (let x of cadena) {
    temporal += x;
    if (temporal.includes("ai")) {
      temporal = temporal.replace("ai", "a");
    } else if (temporal.includes("enter")) {
      temporal = temporal.replace("enter", "e");
    } else if (temporal.includes("imes")) {
      temporal = temporal.replace("imes", "i");
    } else if (temporal.includes("ober")) {
      temporal = temporal.replace("ober", "o");
    } else if (temporal.includes("ufat")) {
      temporal = temporal.replace("ufat", "u");
    }
  }
  encriptado.value = temporal;
}
const btnCopiar = document.getElementById("copy");
btnCopiar.addEventListener("click", function () {
  const textoDes = document.getElementById("textoDes");
  const contenido = textoDes.value;
  navigator.clipboard.writeText(contenido).then(
    function () {
      alert("¡Copiaste tu texto encriptado!");
    },
    function (err) {
      alert("Ocurrió un error al copiar el texto: " + err);
    }
  );
});

boton.onclick = Encriptar;
botonDesncriptar.onclick = Desencriptar;
