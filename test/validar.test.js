import { assert } from 'chai';
import { cifrarVigenere, descifrarVigenere, caesarCipher, descifrarCesar } from './validar.js'; 

const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

describe('Cifrado César', () => {
    it('debería mostrar el alfabeto', () => {
        console.log("Alfabeto:", alfabeto);
        assert.isTrue(alfabeto.includes('A'));
        assert.isTrue(alfabeto.includes('Ñ'));
    });

    it('debería cifrar correctamente el mensaje', () => {
        const mensaje = 'HELLO';
        const desplazamiento = 3;
        const result = caesarCipher(mensaje, desplazamiento);
        console.log(`Cifrado César: "${mensaje}" con desplazamiento ${desplazamiento} = "${result}"`);
        assert.equal(result, 'KHÑÑR');
    });

    it('debería descifrar correctamente el mensaje', () => {
        const mensajeCifrado = "KHOOR";
        const desplazamiento = 3;
        const result = descifrarCesar(mensajeCifrado, desplazamiento);
        console.log(`Descifrado César: "${mensajeCifrado}" con desplazamiento ${desplazamiento} = "${result}"`);
        assert.equal(result, 'HEMMO');
    });
    
    
});

describe('Cifrado Vigenere', () => {
    it('debería mostrar la matriz de Vigenere', () => {
        const matriz = [];
        for (let i = 0; i < alfabeto.length; i++) {
            matriz[i] = [];
            for (let j = 0; j < alfabeto.length; j++) {
                matriz[i][j] = alfabeto[(i + j) % alfabeto.length];
            }
        }
        console.log("Matriz de Vigenere:");
        matriz.forEach(row => console.log(row.join(' ')));
        assert.isArray(matriz);
        assert.equal(matriz.length, alfabeto.length);
    });

    it('debería cifrar correctamente el mensaje', () => {
        const mensaje = 'HELLO';
        const clave = 'KEY';
        const result = cifrarVigenere(mensaje, clave);
        console.log(`Cifrado Vigenere: "${mensaje}" con clave "${clave}" = "${result}"`);
        assert.equal(result, 'QIJUS');
    });

    it('debería descifrar correctamente el mensaje', () => {
        const mensajeCifrado = 'RIJVS';
        const clave = 'KEY';
        const result = descifrarVigenere(mensajeCifrado, clave);
        console.log(`Descifrado Vigenere: "${mensajeCifrado}" con clave "${clave}" = "${result}"`);
        assert.equal(result, 'IELMO');
    });
});
