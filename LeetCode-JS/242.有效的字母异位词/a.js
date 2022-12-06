/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let sMap = new Map();
    let tMap = new Map();

    let getMap = (str, map) => {
        str.split('').forEach(item => {
            if (map.has(item)) {
                map.set(item, map.get(item) + 1);
            } else {
                map.set(item, 1);
            }
        })
    }

    getMap(s, sMap);
    getMap(t, tMap);

    if (Array.from(sMap.keys()).length !== Array.from(tMap.keys()).length) {
        return false;
    }

    let result = true;

    Array.from(sMap.keys()).forEach(item => {
        if (!tMap.has(item)) {
            result = false;
        } else {
            let sVal = sMap.get(item);
            let tVal = tMap.get(item);

            if (sVal !== tVal) {
                result = false;
            }
        }
    })

    return result;
};