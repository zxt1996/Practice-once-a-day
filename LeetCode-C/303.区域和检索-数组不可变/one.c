typedef struct {
    int* nums;
    int numsSize;
} NumArray;


NumArray* numArrayCreate(int* nums, int numsSize) {
    NumArray* obj = (NumArray*)malloc(sizeof(NumArray));

    obj->nums = (int*)malloc(sizeof(int) * (numsSize + 1));
    obj->numsSize = numsSize;

    for(int i = 0; i < numsSize; i++) {
        obj->nums[i] = nums[i];
    }

    return obj;
}

int numArraySumRange(NumArray* obj, int left, int right) {
    int sum = 0;
    for(int i = left; i <= right; i++) {
        sum += obj->nums[i];
    }

    return sum;
}

void numArrayFree(NumArray* obj) {
    free(obj->nums);
    free(obj);
}

/**
 * Your NumArray struct will be instantiated and called as such:
 * NumArray* obj = numArrayCreate(nums, numsSize);
 * int param_1 = numArraySumRange(obj, left, right);
 
 * numArrayFree(obj);
*/