class Solution {
    public int missingNumber(int[] nums) {
        int all = nums.length;
        int num = 0;

        for(int i = 0; i < nums.length; i++) {
            num += nums[i];
            all += i;
        }

        return all - num;
    }
}