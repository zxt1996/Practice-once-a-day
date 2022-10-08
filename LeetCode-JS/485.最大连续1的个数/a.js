/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let max = 0;

    let firstOne = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 1 || i === nums.length - 1) {
            let now = firstOne !== -1 ? i - firstOne : 0;
            if (nums[i] === 1) {
                now += 1;
            }
            max = Math.max(max, now);

            firstOne = -1;
        } else {
            if (firstOne === -1) {
                firstOne = i;
            }
        }
    }

    return max;
};