/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let sMap = new Map();
    let tMap = new Map();

    let getMap = (list, map) => {
        return list.forEach((item, index) => {
            if (map.has(item)) {
                map.set(item, [...map.get(item), index]);
            } else {
                map.set(item, [index]);
            }
        })
    };

    getMap(s.split(''), sMap);
    getMap(t.split(''), tMap);

    let sMapValList = Array.from(sMap.values());
    let tMapValList = Array.from(tMap.values());

    // console.log(sMapValList, tMapValList)
    return sMapValList.join('') === tMapValList.join('');
};