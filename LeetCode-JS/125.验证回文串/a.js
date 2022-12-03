/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    if (s.trim().length === 0) {
        return true;
    }

    let reg = /^[0-9a-zA-Z]*$/;
    let regMax = /^[A-Z]*$/;

    let tempList = s.trim().split('');

    let left = 0, right = tempList.length - 1;

    while (left < right) {
        while (!reg.test(tempList[left])) {
            left++;
        }

        while (!reg.test(tempList[right])) {
            right--;
        }

        let leftVal = tempList[left];
        let rightVal = tempList[right];

        if (regMax.test(leftVal)) {
            leftVal = leftVal.toLowerCase();
        }

        if (regMax.test(rightVal)) {
            rightVal = rightVal.toLowerCase();
        }

        // console.log(leftVal, rightVal)

        if (leftVal !== rightVal) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};