/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* numbers, int numbersSize, int target, int* returnSize){
    *returnSize = 2;

    int* res = (int*)malloc(sizeof(int) * 2);

    int left = 0, right = numbersSize - 1;

    while (left < right) {
        int nowVal = numbers[left] + numbers[right];
        if (nowVal == target) {
            res[0] = left + 1;
            res[1] = right + 1;
            break;
        }

        if (nowVal > target) {
            right--;
        } else {
            left++;
        }
    }

    return res;
}