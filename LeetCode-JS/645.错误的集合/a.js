/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    let result = [], map = new Map(), temp = 0, allNum = 0;

    nums.forEach((num, index) => {
        allNum = allNum + index + 1;
        if (!map.has(num)) {
            map.set(num, 1);
            temp += num;
        } else {
            map.set(num, map.get(num) + 1);
            result.push(num);
        }
    })

    result.push(allNum - temp);

    return result;
};