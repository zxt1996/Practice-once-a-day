/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    let map = new Map();

    words.map((val) => {
        if (map.has(val)) {
            map.set(val, map.get(val) + 1);
        } else {
            map.set(val, 1);
        }
    })

    let resArg = [];
    for (let val of map.keys()) {
        resArg.push(val);
    }
    resArg.sort((a, b) => {
        if (map.get(b) != map.get(a)) {
            return map.get(b) - map.get(a);
        } else {
            if (a[0] == b[0]) {
                return a < b ? -1 : 1;
            }
            return a[0] < b[0] ? -1 : 1;
        }
    });
    return resArg.slice(0, k);
};