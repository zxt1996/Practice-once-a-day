class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        int[] res = new int[Math.min(nums1.length, nums2.length)];
        int index = 0;

        for (int num: nums1) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        for (int num: nums2) {
            if (map.containsKey(num) && map.get(num) > 0) {
                res[index++] = num;
                map.put(num, map.get(num) - 1);
            }
        }

        return Arrays.copyOfRange(res, 0, index);
    }
}