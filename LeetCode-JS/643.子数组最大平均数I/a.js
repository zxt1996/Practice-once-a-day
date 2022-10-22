/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {
    let max = -Infinity, all = 0, temp = 0;

    nums.forEach((num, index) => {
        if (all !== k) {
            temp += num;
            all += 1;
        } else {
            temp -= nums[index - k];
            temp += num;
        }

        if (all === k) {
            max = Math.max(max, temp / k);
        }
    })

    return max;
};