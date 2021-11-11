int maxSubArray(int* nums, int numsSize){
    int result = nums[0], count = 0;

    for(int i = 0; i < numsSize; i++) {
        count += nums[i];
        result = fmax(result, count);

       if (count < 0) {
           count = 0;
       }
    }

    return result;
}