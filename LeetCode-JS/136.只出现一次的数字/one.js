/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let resultNum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        resultNum ^= nums[i];
    }

    return resultNum;
};