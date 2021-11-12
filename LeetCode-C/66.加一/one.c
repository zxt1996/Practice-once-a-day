/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* plusOne(int* digits, int digitsSize, int* returnSize){
    int* res = (int*)malloc(sizeof(int) * (digitsSize + 1));
    int temp = 1;


    for (int i = digitsSize - 1; i > -1; i--) {
        int nowNum = digits[i] + temp;
        digits[i] = nowNum % 10;
        res[i + 1] = nowNum % 10;
        temp = nowNum / 10;
    }

    if (temp == 0) {
        *returnSize = digitsSize;
        return digits;
    }

    *returnSize = digitsSize + 1;
    res[0] = 1;
    return res;
}