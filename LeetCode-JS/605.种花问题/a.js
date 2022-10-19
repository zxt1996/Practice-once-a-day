/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    let result = n;

    flowerbed.forEach((item, index) => {
        if (index === 0 && item === 0 && flowerbed[index + 1] !== 1) {
            result -= 1;
            flowerbed[index] = 1;
        } else if (item !== 1 && flowerbed[index - 1] !== 1) {
            if (index + 1 < flowerbed.length - 1 && flowerbed[index + 1] !== 1 || (index === flowerbed.length - 1)) {
                result -= 1;
                flowerbed[index] = 1;
            }
        }
    })

    return result <= 0;
};