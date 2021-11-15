/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

struct TreeNode* getTree(int* nums, int left, int right) {
    if (left > right) {
        return NULL;
    }

    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    int mid = (left + right) / 2;
    root->val = nums[mid];
    root->left = getTree(nums, left, mid - 1);
    root->right = getTree(nums, mid + 1, right);
    return root;
}

struct TreeNode* sortedArrayToBST(int* nums, int numsSize){
    return getTree(nums, 0, numsSize-1);
}