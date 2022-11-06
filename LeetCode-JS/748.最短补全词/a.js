/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
 var shortestCompletingWord = function(licensePlate, words) {
    let reg = /^[a-zA-Z]+$/;

    let allWord = licensePlate.split('').filter(item => reg.test(item)).map(item => item.toLowerCase());
    let result = null;

    words.forEach(word => {
        let tempList = word.split('').map(item => item.toLowerCase());
        let num = 0;

        allWord.forEach(item => {
            if (tempList.includes(item)) {
                num += 1;
                tempList.splice(tempList.indexOf(item), 1);
            }
        })

        if (num === allWord.length) {
            result = !result || word.length < result.length ? word : result;
        }
    })

    return result;
};