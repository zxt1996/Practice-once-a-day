/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let resArr = [], tempArr = [], map = new Map();

    for (let i = nums2.length - 1; i > -1; i--) {
        while(tempArr.length > 0 && tempArr[tempArr.length - 1] <= nums2[i]) {
            tempArr.pop();
        }

        map.set(nums2[i], tempArr.length > 0 ? tempArr[tempArr.length - 1] : -1);

        tempArr.push(nums2[i]);
    }

    nums1.forEach(item => {
        resArr.push(map.get(item));
    })

    return resArr;
};