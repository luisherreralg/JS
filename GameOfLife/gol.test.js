import { calcNeighborsSum } from './gol.js';

const mock = [
    [1, 0, 1],
    [0, 1, 1],
    [1, 1, 0],
];

const testCases = [
    { 1: 0, j: 0, r: 1 },
    { 1: 0, j: 1, r: 4 },
    { 1: 0, j: 2, r: 2 },

    { 1: 1, j: 0, r: 4 },
    { 1: 1, j: 1, r: 5 },
    { 1: 1, j: 2, r: 3 },

    { 1: 2, j: 0, r: 2 },
    { 1: 2, j: 1, r: 3 },
    { 1: 2, j: 2, r: 3 },
];

describe('Given calcNeighborsSum function', () => {
    testCases.forEach((item) => {
        test('When i = 0; j = 0, then result should be 1', () => {
            //Arrange
            const i = item.i;
            const j = item.j;
            const expectedResult = item.r;

            //Act
            const result = calcNeighborsSum(i, j, mock);

            //Assert
            expect(result).toBe(expectedResult);
        });
    });
});
