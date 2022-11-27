/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let tempList = [];
    let bracketsObj = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    let bracketsObjKeys = Object.keys(bracketsObj);

    s.split('').forEach(str => {
        if (bracketsObjKeys.includes(str) && tempList[tempList.length - 1] === bracketsObj[str]) {
            tempList.pop();
        } else {
            tempList.push(str);
        }
    })

    return tempList.length === 0;
};