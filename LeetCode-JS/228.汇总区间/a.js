/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    if (!nums || nums.length === 0) {
        return [];
    }

    let tempList = [];
    let resultList = [];

    const changeResult = () => {
        tempList.length >= 2 && resultList.push(`${tempList[0]}->${tempList[tempList.length-1]}`);
        tempList.length === 1 && resultList.push(`${tempList[0]}`);
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== tempList[tempList.length - 1] + 1) {
            changeResult();
            tempList = [nums[i]];
        } else {
            tempList.push(nums[i]);
        }

        i === nums.length - 1 && changeResult();
    }

    return resultList;
};