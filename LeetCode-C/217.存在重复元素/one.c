typedef struct {
    int key;            /* we'll use this field as the key */
    UT_hash_handle hh; /* makes this structure hashable */
} Hash;

bool containsDuplicate(int* nums, int numsSize){
    Hash *hash = NULL;

    for (int i = 0; i < numsSize; i++) {
        Hash *s;
        HASH_FIND_INT(hash, &nums[i], s);

        if (s != NULL) {
            return true;
        }

        s = malloc(sizeof(Hash));

        s->key = nums[i];

        HASH_ADD_INT(hash, key, s);
    }

    return false;
}