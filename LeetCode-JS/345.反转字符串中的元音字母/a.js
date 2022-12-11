/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    s = s.split('');
    let left = 0, right = s.length - 1;
    let changeStr = ['a', 'e', 'i', 'o', 'u'];

    while (left < right) {
        while (!changeStr.includes(s[left].toLowerCase()) && left < right) {
            left++;
        }

        while (!changeStr.includes(s[right].toLowerCase()) && left < right) {
            right--;
        }

        if (changeStr.includes(s[left].toLowerCase()) && changeStr.includes(s[right].toLowerCase())) {
            [s[left], s[right]] = [s[right], s[left]];
        }

        left++;
        right--;
    }

    return s.join('');
};