/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let map = new Map();

    list1.forEach((list, index) => {
        map.set(list, index);
    })

    let min = Infinity, result = [];

    list2.forEach((list, index) => {
        if (map.has(list)) {
            let nowNum = map.get(list) + index;
            if (nowNum === min) {
                result.push(list);
            }
            
            if (nowNum < min) {
                min = nowNum;
                result = [list];
            }
        }
    })

    return result;
};