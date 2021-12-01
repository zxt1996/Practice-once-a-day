int findMaxConsecutiveOnes(int* nums, int numsSize){
    int res = 0;

    int tempNum = 0;

    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == 1) {
            tempNum += 1;
            res = fmax(tempNum, res);
        } else {
            tempNum = 0;
        }
    }

    return res;
}