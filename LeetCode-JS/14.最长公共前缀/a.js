/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    strs.sort((a, b) => a.length - b.length);
    let strsList = strs.map(str => str.split(''));
    let sortStrsList = strs[0];

    let resultStrsList = [];

    for (let i = 0; i < sortStrsList.length; i++) {
        let str = sortStrsList[i];

        let canPush = false;

        for (let j = 0; j < strsList.length; j++) {
            if (strsList[j][i] !== str) {
                break;
            }

            if (j === strsList.length - 1) {
                canPush = true;
            }
        }

        if (!canPush) {
            break;
        }

        resultStrsList.push(str);
    }

    return resultStrsList.join('');
};