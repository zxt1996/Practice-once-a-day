/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    let patternMap = new Map();
    let sMap = new Map();

    let getMap = (list, map) => {
        list.forEach((item, index) => {
            if (map.has(item)) {
                map.set(item, [...map.get(item), index]);
            } else {
                map.set(item, [index]);
            }
        })
    }

    getMap(pattern.split(''), patternMap);
    getMap(s.split(' '), sMap);

    return Array.from(patternMap.values()).join('') === Array.from(sMap.values()).join('');
};