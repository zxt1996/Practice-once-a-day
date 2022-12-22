/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
    let sList = s.split('');
    let pos = 1;
    let mid = sList.length >> 1;

    while (pos <= mid) {
        if (s.split(sList.slice(0, pos).join('')).join('').trim().length === 0) {
            return true;
        }
        pos++;
    }

    return false;
};