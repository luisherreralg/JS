import { add, division, substraction } from './sample.js';

describe('Testing add', () => {
    test('if a = 2 and b = 2 add should be', () => {
        let a = 2;
        let b = 2;
        expect(add(a, b)).toBe(4);
    });

    // test('if a = 2 and b = 2 add should be', () => {
    //     let a = 0;
    //     let b = 2;
    //     expect(add(a, b)).toBe('Error');
    // });

    test('if a = 0, return should be "Error', () => {
        let a = 0;
        let b = 2;
        expect(add(a, b)).toBe('Error');
    });
});

describe('Testing subtraction', () => {
    test('If a = 2 and b = 2 result sould be 0', () => {
        let a = 2;
        let b = 2;
        expect(substraction(a, b)).toBe(0);
    });
});

describe('Testing division', () => {
    test('If b = 0, return should be Error', () => {
        let a = 2;
        let b = 0;

        //Para comprobar un toThrow() es necesario meterlo dentro de una función vacía para que funcione, es lo mismo que el try catch pero el matcher lo hace solo. Funciona unicamente para testing
        expect(() => {
            division(a, b).toThrow();
        });

        //Esto es como se haría sin usar el matcher
        // try {
        //     division(a, b);
        // } catch (error) {
        //     expect(error.message).toBe(
        //         'Mensaje de error: No se puede dividir algo entre 0'
        //     );
        // }
    });
});
