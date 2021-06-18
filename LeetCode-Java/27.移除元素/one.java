class Solution {
    public int removeElement(int[] nums, int val) {
        int fast = nums.length - 1;

        for (int slow = 0; slow <= fast; slow++) {
            if (nums[slow] == val) {
                int temp = nums[fast];
                nums[fast] = nums[slow];
                nums[slow] = temp;
                fast--;
                slow--;
            } 
        }

        return fast + 1;
    }
}