void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n){
    int oneStart = m - 1;
    int twoStart = n - 1;
    int res = m + n - 1;

    while (oneStart >= 0 && twoStart >= 0) {
        nums1[res--] = nums1[oneStart] > nums2[twoStart] ? nums1[oneStart--] : nums2[twoStart--];
    }

    while (oneStart >= 0) {
        nums1[res--] = nums1[oneStart--];
    }

    while (twoStart >= 0) {
        nums1[res--] = nums2[twoStart--];
    }
}