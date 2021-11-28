int cmp(const void *a, const void *b) {
    return *(int*)a < *(int*)b;
}

int thirdMax(int* nums, int numsSize){
    qsort(nums, numsSize, sizeof(nums[0]), cmp);

    int resPosition = 0;
    int* resList = (int*)malloc(sizeof(int) * numsSize);

    for(int i = 0; i < numsSize; i++) {
        if (resPosition == 0 || resList[resPosition - 1] != nums[i]) {
            resList[resPosition++] = nums[i];
        }

        if (resPosition == 3) {
            return resList[resPosition - 1];
        }
    }

    return nums[0];
}