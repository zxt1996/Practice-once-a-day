int removeElement(int* nums, int numsSize, int val){
    int fast = numsSize - 1;

    for(int slow = 0; slow <= fast; slow++) {
        if (nums[slow] == val) {
            int temp = nums[slow];
            nums[slow] = nums[fast];
            nums[fast] = temp;
            fast--;
            slow--;
        }
    }

    return fast + 1;
}