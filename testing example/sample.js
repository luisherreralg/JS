export function add(a, b) {
    return a + b;
}

export function substraction(a, b) {
    return a - b;
}

export const division = (a, b) => {
    const paramError = nwe Error ('ERROR GUARDADO EN VARIABLE')
    if (b === 0) {
        throw new Error('Mensaje de error: No se puede dividir algo entre 0');
    }

    if (a === null || b === null) {
        throw new Error(
            'Parámetros no válidos: no se puede operar con un null'
        );
    }

    if (isNaN(a) || isNaN(b)) {
        throw paramError;
    }

    return a / b;
};
