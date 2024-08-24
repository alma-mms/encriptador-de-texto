const textArea = document.querySelector(".contenido__texto__ingresado");
const infTexto =(".informacion__texto")
const btnEncriptar= document.querySelector(".btn__encriptar");
const btnDesencriptar=document.querySelector(".btn__desencriptar");
const mnjSalida=document.querySelector(".contenido__mensaje__salida")
const mensaje = document.querySelector(".contenido__mensaje__encriptado");
const btnCopiarTexto = document.querySelector(".btn__copiar")

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
// Función para validar el texto ingresado
function validarTexto(textArea) {
    if (textArea === "") {
        return "No se encontró ningún texto";
    }
    if (/[A-Z]/.test(textArea)) {
        return "No debe usar letras Mayúsculas";
    }
    if (/[^a-z\s]/.test(textArea)) {
        return "No deben ser utilizados letras con acentos ni caracteres especiales";
    }
    return "valido";
}

// Funciones para remplazar letras
function encriptarTexto(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function desencriptarTexto(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

// Encriptar
btnEncriptar.addEventListener("click", function () {
    let texto = textArea.value;
    let validacion = validarTexto(texto);

    if (validacion === "valido") {
        let textoEncriptado = encriptarTexto(texto);
        mensaje.value = textoEncriptado;
        mnjSalida.style.display = "none"; 
        btnCopiarTexto.style.visibility = "inherit"; 
    } else {
        infTexto.textContent = validacion; 
    }
});

// Desencriptar
btnDesencriptar.addEventListener("click", function () {
    let texto = textArea.value;
    let validacion = validarTexto(texto);

    if (validacion === "valido") {
        let textoDesencriptado = desencriptarTexto(texto);
        mensaje.value = textoDesencriptado;
        mnjSalida.style.display = "none"; 
        btnCopiarTexto.style.visibility = "inherit"; 
    } else {
        infTexto.textContent = validacion; 
    }
});

// Copiado de texto 
btnCopiarTexto.addEventListener("click", function () {
    mensaje.select();
    document.execCommand("copy");
    infTexto.textContent = "";
    const texto = "Texto copiado al portapapeles";
    let i = 0;

    function mostrarTextoLetraPorLetra() {
        if (i < texto.length) {
            infTexto.textContent += texto.charAt(i);
            i++;
            setTimeout(mostrarTextoLetraPorLetra, 70);
        }
    }
    mostrarTextoLetraPorLetra();
});

// Alerta del mensaje predeterminado 
textArea.addEventListener("input", function () {
    if (textArea.value.trim() === "") {
        infTexto.textContent = "Solo letras minúsculas y sin acentos";
    }
});

