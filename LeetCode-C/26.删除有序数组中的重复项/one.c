int removeDuplicates(int* nums, int numsSize){
    if (numsSize == 0) {
        return 0;
    }
    
    int i = 0;

    for (int j = 1;j < numsSize;j++) {
        if (nums[i] != nums[j]) {
            nums[i + 1] = nums[j];
            i++;
        }
    }

    return i + 1;
}