/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let fastPoint = 1, slowPoint = 0;

    while (fastPoint < nums.length) {
        if (nums[slowPoint] === nums[fastPoint]) {
            nums.splice(fastPoint, 1);
        } else {
            fastPoint++;
            slowPoint++;
        }
    }

    return fastPoint;
};