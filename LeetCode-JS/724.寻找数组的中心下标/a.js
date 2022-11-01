/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let all = 0;

    nums.forEach(num => {
        all += num;
    })

    let left = 0, leftNum = 0;

    while (left < nums.length) {
        if (left - 1 >= 0) {
            leftNum += nums[left - 1];
        }
        all -= nums[left];

        if (all === leftNum) {
            return left;
        }

        left += 1;
    }

    return -1;
};