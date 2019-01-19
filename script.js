const createMatrix = (row, col) => new Array(row).fill(0).map(() => new Array(col).fill(0));
const snakeFillMatrix = (row, col) => {
    const maxNum = col * row;
    let matrix = createMatrix(row, col);
    let lastNum = 0;
    // left to right
    const step1 = (round) => {
        for (let c = round; c < col - round; c++) {
            lastNum++;
            if (matrix[round][c] === 0) matrix[round][c] = lastNum;
        }
    };
    // top to bottom
    const step2 = (round) => {
        for (let r = round + 1; r < row - round; r++) {
            lastNum++;
            if (matrix[r][col - 1 - round] === 0) matrix[r][col - 1 - round] = lastNum;
        }
    };
    // right to left
    const step3 = (round) => {
        for (let c = col - 2 - round; c >= round; c--) {
            lastNum++;
            if (matrix[row - 1 - round][c] === 0) matrix[row - 1 - round][c] = lastNum;
        }
    };
    // bottom to top
    const step4 = (round) => {
        for (let r = row - 2 - round; r > round; r--) {
            lastNum++;
            if (matrix[r][round] === 0) matrix[r][round] = lastNum;
        }
    };
    const doSteps = (round = 0) => {
        step1(round);
        step2(round);
        step3(round);
        step4(round);
        if (lastNum < maxNum) doSteps(round + 1);
    };
    doSteps();
    console.log('result: ', matrix);
};
window.onload = () => {
    const test = [[3, 5], [5, 8], [6, 10], [14, 9]];
    test.forEach(v => {
        snakeFillMatrix(v[0], v[1]);
    });
};