class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set = new HashSet<>();
        Set<Integer> resSet = new HashSet<>();

        for (int num1: nums1) {
            set.add(num1);
        }

        for(int num2: nums2) {
            if (set.contains(num2)) {
                resSet.add(num2);
            }
        }

        int[] res = new int[resSet.size()];
        int index = 0;
        for (int num : resSet) {
            res[index++] = num;
        }

        return res;
    }
}