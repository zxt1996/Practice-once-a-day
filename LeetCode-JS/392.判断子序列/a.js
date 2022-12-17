/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let map = new Map();

    t.split('').forEach((item, index) => {
        if (map.has(item)) {
            map.set(item, [...map.get(item), index]);
        } else {
            map.set(item, [index]);
        }
    })

    let sList = s.split('');
    let tempList = [];

    for (let i = 0; i < sList.length; i++) {
        if (!map.has(sList[i]) || map.get(sList[i]).length === 0) {
            return false;
        }

        if (tempList.length === 0) {
            tempList.push(map.get(sList[i])[0]);
            map.set(sList[i], [...map.get(sList[i]).slice(1)]);
        } else {
            let min = tempList[tempList.length - 1];

            let list = map.get(sList[i]);
            
            for (let j = 0; j < list.length; j++) {
                if (list[j] > min) {
                    tempList.push(list[j]);
                    map.set(sList[i], [...map.get(sList[i]).slice(0, j), ...map.get(sList[i]).slice(j+1)]);
                    break;
                }
            }
        }
    }

    return sList.length === tempList.length;
};