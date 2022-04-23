/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let nowPositionNum = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += nowPositionNum;

        if (digits[i] > 9) {
            digits[i] -= 10;
            nowPositionNum = 1;
        } else {
            nowPositionNum = 0;
        }
    }

    if (nowPositionNum === 1) {
        digits.unshift(nowPositionNum);
    }

    if (digits[0] === 0 && digits.length === 1) {
        return [1];
    }

    return digits;
};