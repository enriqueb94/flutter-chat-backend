"use strict";
function ordenar (objeto, tipo) {
    // si el objeto es nulo rompemos ejecucion
    if (!objeto) {
        return;
    }
    // de lo contrario lo ordenamos segun el tipo que recibimos como parametro
    switch (tipo) {
    case 1:
        objeto.sort((a, b) => a.weight - b.weight);
        break;
    case 2:
        objeto.sort((a, b) => b.weight - a.weight);
    }

    return objeto;
}

module.exports = {
    ordenar
};
