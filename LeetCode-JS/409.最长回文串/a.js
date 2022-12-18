/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    let map = new Map();

    s.split('').forEach(item => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    })

    let result = 0, maxOddNum = 0;

    Array.from(map.values()).forEach(item => {
        if (item % 2 === 0) {
            result += item;
        } else {
            maxOddNum = 1;
            result += (item - 1);
        }
    })

    return result + maxOddNum;
};