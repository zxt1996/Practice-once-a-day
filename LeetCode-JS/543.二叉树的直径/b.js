/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    let result = 1;

    let depth = (r) => {
        if(!r){
            return 0;
        }
        let L = depth(r.left);
        let R = depth(r.right);
        result = Math.max(result,L + R+ 1);
        return Math.max(L,R) + 1;
    }

    depth(root);

    return result - 1;
};