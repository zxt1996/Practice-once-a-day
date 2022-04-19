/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let resultList = [];
    let map = new Map();

    nums.forEach((num, index) => {
        let tempNum = target - num;

        if (map.has(tempNum)) {
            resultList = [index, map.get(tempNum)];
        } else {
            map.set(num, index);
        }
    })

    return resultList;
};