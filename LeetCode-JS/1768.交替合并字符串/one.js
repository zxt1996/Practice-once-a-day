/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    word1 = word1.split('');
    word2 = word2.split('');
    for (let i=0;i<word1.length;i++) {
        if (word2.length > 0) {
            word1.splice(i+1, 0, word2.shift());
            i++;
        }
    }

    return word1.join('') + word2.join('');
};