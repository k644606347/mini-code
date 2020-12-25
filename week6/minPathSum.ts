function minPathSum(grid: number[][]): number {
    const rowCount = grid[0].length,
        colCount = grid.length,
        paths: number[] = [];

    function _calc(row: number, col: number) {
        if (row === 0 && col === 0) {
            paths.push(grid[row][col]);
            return;
        }

        let target: number;
        if (row === 0) {
            target = grid[row][col - 1]; col -= 1;
        } else if (col === 0) {
            target = grid[row - 1][col]; row -= 1;
        } else {
            let rVal = grid[row][col - 1],
                bVal = grid[row - 1][col];
            target = Math.min(rVal, bVal);

            if (target === rVal) col -= 1;
            if (target === bVal) row -= 1;
        }
        
        _calc(row, col);
        paths.push(target);
    }

    _calc(rowCount - 1, colCount - 1);
    paths.push(grid[rowCount - 1][colCount - 1]);

    console.log(paths);
    return paths.reduce((c, p) => {
        // console.log(p)
        return c + p;
    }, 0);
};

minPathSum(
    [
        [1,3,1,10],
        [2,9,5,1],
        [4,22,1,3],
        [4,22,1,3]
    ]);