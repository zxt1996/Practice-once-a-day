/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let map = new Map();

    s.split('').forEach(item => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    })

    let tList = t.split('');

    for (let i = 0; i < tList.length; i++) {
        if (!map.has(tList[i]) || map.get(tList[i]) === 0) {
            return tList[i];
        } else {
            map.set(tList[i], map.get(tList[i]) - 1);
        }
    }
};