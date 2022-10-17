export const calcNeighborsSum = (i = 0, j = 0, dataArray = []) => {
    const positions = [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j - 1],
        [i, j + 1],
        [i + 1, j + 1],
        [i - 1, j + 1],
    ];

    const filterPositions = .filter((item) => {
        item[0] >= 0 && item[1] >= 0 
        && item[0] < dataArray.length && item[1] <dataArray[1];
    });

    let result = 0;
    positions.forEach((item) => {
        result += dataArray[item[0][item[1]]];
    });

    return result;
};
