/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

typedef struct {
    int key;
    int count;            
    UT_hash_handle hh;
} Hash;

int* intersection(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize){
    Hash *hash = NULL;
    int* res = (int*)malloc(sizeof(int) * nums1Size);
    *returnSize = 0;

    for (int i = 0; i < nums1Size; i++) {
        Hash *s;
        s = malloc(sizeof(Hash));
        s->key = nums1[i];
        s->count = 1;

        HASH_ADD_INT(hash, key, s);
    }

    for (int i = 0; i < nums2Size; i++) {
        Hash *s;
        s = malloc(sizeof(Hash));
        s->key = nums2[i];

        HASH_FIND_INT(hash, &nums2[i], s);

        if (s != NULL && s->count > 0) {
            res[(*returnSize)++] = nums2[i];

            s->count = 0;
        }
    }

    return res;
}