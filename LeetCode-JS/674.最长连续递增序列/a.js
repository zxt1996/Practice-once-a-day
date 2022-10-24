/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    let max = -Infinity;
    let tempLen = 0;

    nums.forEach((num, index) => {
        if (index === 0 || num > nums[index - 1]) {
            tempLen += 1;
        } else {
            tempLen = 1;
        }

        max = Math.max(max, tempLen);
    })

    return max;
};