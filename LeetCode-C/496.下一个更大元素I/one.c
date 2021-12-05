/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
 typedef struct {
    int key;
    int count;            
    UT_hash_handle hh;
} Hash;

int* nextGreaterElement(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize){
    int *resArray = (int*)malloc(sizeof(int) * nums1Size);
    int *tempArray = (int*)malloc(sizeof(int) * nums2Size);
    int postion = 0;

    Hash *hash = NULL;

    for (int i = nums2Size - 1; i > -1; i--) {
        while (postion != 0 && tempArray[postion - 1] <= nums2[i]) {
            postion--;
        }

        Hash *s;
        s = malloc(sizeof(Hash));
        s->key = nums2[i];
        s->count = postion == 0 ? -1 : tempArray[postion - 1];

        HASH_ADD_INT(hash, key, s);

        tempArray[postion++] = nums2[i];
    }

    *returnSize = 0;
    for (int i = 0; i < nums1Size; i++) {
        Hash *tmp;
        HASH_FIND_INT(hash, nums1 + i, tmp);

        resArray[(*returnSize)++] = tmp->count;
    }

    return resArray;
}