/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {
    let map = new Map();
    let max = 0;

    nums.forEach(num => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    })

    let sortSetList = [...new Set(nums)].sort((a, b) => a - b);

    sortSetList.forEach((num, index) => {
        if (index !== 0 && num - sortSetList[index - 1] === 1) {
            max = Math.max(max, map.get(sortSetList[index - 1]) + map.get(num));
        }
    })

    return max;
};