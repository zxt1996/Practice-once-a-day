/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function(s, k) {
    let sList = s.split('').filter(item => item !== '-').map(item => item.toUpperCase());

    let result = [];
    let tempPos = sList.length;

    while (tempPos > 0) {
        if (tempPos - k < 0) {
            result.unshift(sList.slice(0, tempPos).join(''));
        } else {
            result.unshift(sList.slice(tempPos - k, tempPos).join(''));
        }
        tempPos -= k;
    }

    return result.join('-');
};