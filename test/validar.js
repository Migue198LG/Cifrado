const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

// Función para cifrar usando el cifrado César
export function caesarCipher(texto, desplazamiento) {
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i].toUpperCase(); // Convertir a mayúsculas

        if (alfabeto.includes(letra)) {
            let posicion = alfabeto.indexOf(letra); // Obtener la posición
            let nuevaPosicion = (posicion + desplazamiento) % alfabeto.length; // Calcular nueva posición
            
            // Ajustar la nueva posición si es negativa
            if (nuevaPosicion < 0) {
                nuevaPosicion += alfabeto.length;
            }
            resultado += alfabeto[nuevaPosicion]; // Agregar letra cifrada
        } else {
            resultado += letra; // Agregar caracteres no alfabéticos sin cambios
        }
    }

    return resultado; // Retornar el texto cifrado
}

// Función para descifrar usando el cifrado César
export function descifrarCesar(textoCifrado, desplazamiento) {
    let resultado = '';

    for (let i = 0; i < textoCifrado.length; i++) {
        let letra = textoCifrado[i].toUpperCase(); // Convertir a mayúsculas

        if (alfabeto.includes(letra)) {
            let posicion = alfabeto.indexOf(letra); // Obtener la posición
            let nuevaPosicion = (posicion - desplazamiento + alfabeto.length) % alfabeto.length; // Calcular nueva posición
            
            resultado += alfabeto[nuevaPosicion]; // Agregar letra descifrada
        } else {
            resultado += letra; // Agregar caracteres no alfabéticos sin cambios
        }
    }

    return resultado; // Retornar el texto descifrado
}

// Función para cifrar usando el cifrado Vigenere
export function cifrarVigenere(texto, clave) {
    let cifrado = "";
    let claveExpandida = "";
    let j = 0;

    // Expandir la clave
    for (let i = 0; i < texto.length; i++) {
        if (alfabeto.includes(texto[i].toUpperCase())) {
            claveExpandida += clave[j % clave.length].toUpperCase();
            j++;
        } else {
            claveExpandida += texto[i]; 
        }
    }

    // Cifrar el texto
    for (let i = 0; i < texto.length; i++) {
        let letraTexto = texto[i].toUpperCase();
        let letraClave = claveExpandida[i].toUpperCase();

        if (alfabeto.includes(letraTexto)) {
            let posicionTexto = alfabeto.indexOf(letraTexto);
            let posicionClave = alfabeto.indexOf(letraClave);
            let nuevaPosicion = (posicionTexto + posicionClave) % alfabeto.length;
            cifrado += alfabeto[nuevaPosicion];
        } else {
            cifrado += letraTexto;
        }
    }

    return cifrado; // Retornar el texto cifrado
}

// Función para descifrar usando el cifrado Vigenere
export function descifrarVigenere(texto, clave) {
    let descifrado = "";
    let claveExpandida = "";
    let j = 0;

    // Expandir la clave
    for (let i = 0; i < texto.length; i++) {
        if (alfabeto.includes(texto[i].toUpperCase())) {
            claveExpandida += clave[j % clave.length].toUpperCase();
            j++;
        } else {
            claveExpandida += texto[i];
        }
    }

    // Descifrar el texto
    for (let i = 0; i < texto.length; i++) {
        let letraTexto = texto[i].toUpperCase();
        let letraClave = claveExpandida[i].toUpperCase();

        if (alfabeto.includes(letraTexto)) {
            let posicionTexto = alfabeto.indexOf(letraTexto);
            let posicionClave = alfabeto.indexOf(letraClave);
            let nuevaPosicion = (posicionTexto - posicionClave + alfabeto.length) % alfabeto.length;
            descifrado += alfabeto[nuevaPosicion];
        } else {
            descifrado += letraTexto;
        }
    }

    return descifrado; // Retornar el texto descifrado
}
