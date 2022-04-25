/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let nums1Point = m - 1, nums2Point = n - 1, resultPoint = m + n - 1;

    while (nums1Point >= 0 && nums2Point >= 0) {
        if (nums1[nums1Point] > nums2[nums2Point]) {
            nums1[resultPoint] = nums1[nums1Point];
            nums1Point--;
        } else {
            nums1[resultPoint] = nums2[nums2Point];
            nums2Point--;
        }

        resultPoint--;
    }

    while (nums1Point >= 0) {
        nums1[resultPoint] = nums1[nums1Point];
        nums1Point--;
        resultPoint--;
    }

    while (nums2Point >= 0) {
        nums1[resultPoint] = nums2[nums2Point];
        nums2Point--;
        resultPoint--;
    }

    return nums1;
};