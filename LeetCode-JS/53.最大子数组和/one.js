/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let result = nums[0], count = 0;

    nums.forEach(item => {
        count += item;

        result = Math.max(result, count);

        if (count < 0) {
            count = 0;
        }
    })

    return result;
};