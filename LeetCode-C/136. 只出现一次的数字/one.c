// 用按位异或来进行求个数
// 1. A ^ A = 0
// 2. A ^ 0 = A
// 3. A ^ B = B ^ A

int singleNumber(int* nums, int numsSize){
    int res = nums[0];

    for (int i = 1; i < numsSize; i++) {
        res = res ^ nums[i];
    }

    return res;
}