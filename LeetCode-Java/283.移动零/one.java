class Solution {
    public void moveZeroes(int[] nums) {
        // 声明两个指针L,R
        // L指向 0 位，R指向非 0 位
        int left = 0;
        int right = 0;

        while (right < nums.length) {
            if (nums[right] != 0) {
                int temp = nums[right];
                nums[right] = nums[left];
                nums[left] = temp;
                left += 1;
            }
            right += 1;
        }
    }
}