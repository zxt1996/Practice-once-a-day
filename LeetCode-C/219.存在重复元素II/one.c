typedef struct {
    int key;
    int val;
    UT_hash_handle hh;
} Hash;

bool containsNearbyDuplicate(int* nums, int numsSize, int k){
    Hash *hash = NULL;

    for (int i = 0; i < numsSize; i++) {
        Hash *s;
        HASH_FIND_INT(hash, &nums[i], s);

        if (s != NULL && i - s->val <= k) {
            return true;
        }

        s = malloc(sizeof(Hash));
        s->key = nums[i];
        s->val = i;

        HASH_ADD_INT(hash, key, s); 
    }

    return false;
}