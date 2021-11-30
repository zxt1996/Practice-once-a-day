/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findDisappearedNumbers(int* nums, int numsSize, int* returnSize){
    *returnSize = 0;

    int* resList = (int*)malloc(sizeof(int) * numsSize);

    for (int i = 0; i < numsSize; i++) {
        int temp = abs(nums[i]) - 1;

        if (nums[temp] > 0) {
            nums[temp] *= -1;
        }
    }

    for (int i = 0; i < numsSize; i++) {
        if (nums[i] > 0) {
            resList[(*returnSize)++] = i + 1;
        }
    }

    return resList;
}