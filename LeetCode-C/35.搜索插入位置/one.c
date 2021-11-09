int searchInsert(int* nums, int numsSize, int target){
    if (target < nums[0]) {
        return 0;
    }
    for (int slow = 0; slow < numsSize; slow++) {
        if (nums[slow] == target) {
            return slow;
        }

        if (slow + 1 < numsSize && target < nums[slow + 1]) {
            return slow + 1;
        }
    }

    return numsSize;
}