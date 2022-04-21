/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let slowPoint = 0, fastPoint = nums.length - 1;

    while (slowPoint <= fastPoint) {
        let mid = ((fastPoint - slowPoint) >> 1) + slowPoint;

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            slowPoint = mid + 1;
        } else {
            fastPoint = mid - 1;
        }
    }

    return slowPoint;
};