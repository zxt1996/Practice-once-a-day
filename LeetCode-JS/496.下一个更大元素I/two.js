/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let twoMap = new Map();
    let resultList = [];

    nums2.forEach((num, pos) => {
        twoMap.set(num, pos);
    })

    nums1.forEach(num => {
        let pos = twoMap.get(num);

        for (let i = pos; i < nums2.length; i++) {
            if (nums2[i] > num) {
                resultList.push(nums2[i]);
                break;
            }

            if (i === nums2.length - 1) {
                resultList.push(-1);
            }
        }
    })

    return resultList;
};