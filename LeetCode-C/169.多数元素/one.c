int majorityElement(int* nums, int numsSize){
    int* res = (int*)malloc(sizeof(int) * numsSize);

    int pointer = -1;

    for(int i = 0; i < numsSize; i++) {
        // 当前值与栈顶相同时,或当前栈为空时，推进去
        if (pointer == -1 || res[pointer] == nums[i]) {
            res[++pointer] = nums[i];
        } else {
            // 否则排除栈顶元素
            pointer--;
        }
    }
    
    return res[0];
}