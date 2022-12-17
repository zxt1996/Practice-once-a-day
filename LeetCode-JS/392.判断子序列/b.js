/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let sPos = 0, tPos = 0;
    let sList = s.split('');
    let tList = t.split('');

    while (sPos < sList.length && tPos < tList.length) {
        if (sList[sPos] === tList[tPos]) {
            sPos++;
        }

        tPos++;
    }

    return sPos === sList.length;
};