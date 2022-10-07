/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    let resultLen = 0;

    grid.forEach((yItem, yPos) => {
        yItem.forEach((xItem, xPos) => {
            if (xItem === 1) {
                let isMinYPos = yPos - 1 >= 0;
                let isMaxYPos = yPos + 1 < grid.length;
                let isMinXPos = xPos - 1 >= 0;
                let isMaxXPos = xPos + 1 < yItem.length;

                if (!isMinYPos || grid[yPos - 1][xPos] === 0) {
                    resultLen += 1;
                }

                if (!isMinXPos || grid[yPos][xPos - 1] === 0) {
                    resultLen += 1;
                }

                if (!isMaxYPos || grid[yPos + 1][xPos] === 0) {
                    resultLen += 1;
                }

                if (!isMaxXPos || grid[yPos][xPos + 1] === 0) {
                    resultLen += 1;
                }
            }

        })
    })

    return resultLen;
};