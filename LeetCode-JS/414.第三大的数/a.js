/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    let sortList = [...new Set(nums)].sort((a, b) => a - b);

    if (sortList.length > 2) {
        return sortList[sortList.length - 3];
    }

    return sortList[sortList.length - 1];
};