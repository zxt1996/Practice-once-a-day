/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let resultList = [];

    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            resultList.push(i);
        }
    }

    return resultList;
};