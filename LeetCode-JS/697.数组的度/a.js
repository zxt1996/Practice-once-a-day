/**
 * @param {number[]} nums
 * @return {number}
 */
 var findShortestSubArray = function(nums) {
    let map = new Map();
    let max = -Infinity;
    let resultNum = [nums[0]];

    nums.forEach(num => {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }

        if (map.get(num) > max) {
            max = map.get(num);
            resultNum = [num];
        }

        if (map.get(num) === max && !resultNum.includes(num)) {
            resultNum.push(num);
        }
    })

    let min = Infinity;

    resultNum.forEach(num => {
        let start = nums.indexOf(num);
        let end = nums.lastIndexOf(num);

        min = Math.min(min, end - start + 1);
    })

    return min;
};