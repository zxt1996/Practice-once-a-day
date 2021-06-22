class Solution {
    public int maxSubArray(int[] nums) {
        int sum = 0;
        int max = nums[0];
        for(int nowNum: nums) {
            if(sum > 0) {
                sum += nowNum;
            } else {
                sum = nowNum;
            }

            max = Math.max(max, sum);
        }
        return max;
    }
}