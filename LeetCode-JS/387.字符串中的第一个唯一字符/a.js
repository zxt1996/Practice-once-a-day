/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let map = new Map();

    let sList = s.split('');

    sList.forEach(item => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    })

    for (let i = 0; i < sList.length; i++) {
        if (map.get(sList[i]) === 1) {
            return i;
        }
    }

    return -1;
};