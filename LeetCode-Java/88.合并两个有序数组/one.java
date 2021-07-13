class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int all = m + n - 1;
        int useM = m - 1;
        int useN = n - 1;

        while(useM >= 0 && useN >= 0) {
            nums1[all--] = nums1[useM] > nums2[useN] ? nums1[useM--] : nums2[useN--];
        }

        for(int i = useN; i >= 0; i--) {
            nums1[all--] = nums2[i];
        }
    }
}