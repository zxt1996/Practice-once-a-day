/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let getMap = (nums) => {
        let map = new Map();

        nums.forEach(num => {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        })

        return map;
    }

    let nums1Map = getMap(nums1);
    let nums2Map = getMap(nums2);
    
    let resultList = [];

    Array.from(nums1Map.keys()).forEach(key => {
        if (nums2Map.has(key)) {
            let tempArr = new Array(Math.min(nums1Map.get(key), nums2Map.get(key))).fill(key);
            resultList.push(...tempArr);
        }
    })

    return resultList;
};