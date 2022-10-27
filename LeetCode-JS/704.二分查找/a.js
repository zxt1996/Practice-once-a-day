/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let start = 0, end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((end - start) / 1) + start;

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
};