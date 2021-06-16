class Solution {
    public int[] twoSum(int[] nums, int target) {
        for(int i = 0; i < nums.length - 1; i++) {
            int nextValue = target - nums[i];
            for(int j = i + 1; j < nums.length; j++) {
                if(nums[j] == nextValue) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[0];
    }
}