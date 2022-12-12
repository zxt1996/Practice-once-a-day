/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let map = new Map();

    magazine.split('').forEach(item => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    })

    let tempStrList = ransomNote.split('');
    for (let i = 0; i < tempStrList.length; i++) {
        if (!map.has(tempStrList[i]) || map.get(tempStrList[i]) < 1) {
            return false;
        }

        map.set(tempStrList[i], map.get(tempStrList[i]) - 1);
    }

    return true;
};